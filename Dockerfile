# 1: Build the exe
FROM rust:latest as base

ENV USER=worker

WORKDIR /code

# 1a: Prepare for static linking
RUN apt-get update && \
    apt-get dist-upgrade -y && \
    apt-get install -y libssl-dev libcurl4-openssl-dev && \
    rustup toolchain add stable

RUN cargo init
COPY Cargo.toml /code/Cargo.toml
RUN cargo fetch
RUN echo "fn main() {println!(\"if you see this, the build broke\")}" > src/main.rs
RUN cargo build --release
RUN OUTPUT_CSS="$(pwd)/dist/app.css" cargo +nightly build -p isomorphic-server --release
RUN rm -f /code/target/release/deps/isomorphic*

FROM base AS builder
RUN rm -r /code/src
COPY src /code/src
COPY migrations /code/migrations
COPY sqlx-data.json /code/sqlx-data.json
RUN OUTPUT_CSS="$(pwd)/dist/app.css" cargo +nightly build -p isomorphic-server --release

# 2: Copy the exe and extra files ("static") to an empty Docker image
FROM rust:slim as deploy
COPY --from=builder /code/target/release/isomorphic-server /usr/bin/isomorphic-server

RUN apt-get update && \
    apt-get dist-upgrade -y && \
    apt-get install -y libssl-dev libcurl4-openssl-dev

EXPOSE 8080
ENTRYPOINT ["/usr/bin/isomorphic-server"]
