#![feature(proc_macro_hygiene)]

pub use crate::state::*;
pub use crate::store::*;
use crate::views::*;
use router_rs::prelude::*;
use std::cell::RefCell;
use std::rc::Rc;
use virtual_dom_rs::prelude::*;
pub use virtual_dom_rs::VirtualNode;
use wasm_bindgen;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use wasm_bindgen::JsValue;

mod state;
mod store;
mod views;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_name = "downloadJson")]
    pub fn download_json(path: &str, callback: &js_sys::Function);
}

pub struct App {
    pub store: Rc<RefCell<Store>>,
    router: Rc<Router>,
}

impl App {
    pub fn new(path: String, token: Option<String>) -> App {
        let state = State::new(token);
        let store = Rc::new(RefCell::new(Store::new(state)));

        store.borrow_mut().msg(&Msg::SetPath(path));

        let router = make_router(Rc::clone(&store));

        store.borrow_mut().set_router(Rc::clone(&router));

        App { store, router }
    }

    pub fn from_state_json(json: &str) -> App {
        let state = State::from_json(json);
        let store = Rc::new(RefCell::new(Store::new(state)));

        let router = make_router(Rc::clone(&store));

        store.borrow_mut().set_router(Rc::clone(&router));

        let path = store.borrow().path().to_string();

        store.borrow_mut().msg(&Msg::SetPath(path));

        App { store, router }
    }
}

impl App {
    pub fn render(&self) -> VirtualNode {
        match self.router.view(self.store.borrow().path()) {
            Some(route) => route,
            None => NotFoundView::new().render(),
        }
    }
}

#[route(path = "/")]
fn home_route() -> VirtualNode {
    HomeView::new().render()
}

// @book start on-visit-example

#[route(path = "/initial")]
fn initial_route() -> VirtualNode {
    InitialView::new().render()
}

#[route(path = "/sign_in")]
fn sign_in_route() -> VirtualNode {
    SignInView::new().render()
}

#[route(
  path = "/targets",
  on_visit = download_contributors_json
)]
fn targets_route(store: Provided<Rc<RefCell<Store>>>) -> VirtualNode {
    TargetsView::new(Rc::clone(&store)).render()
}

#[route(path = "/target/:id")]
fn target_route(id: u64) -> VirtualNode {
    let id = format!("{}", id);

    html! {
        <div> User { id } </div>
    }
}

#[route(path = "/tasks")]
fn tasks_route() -> VirtualNode {
    TasksView::new().render()
}

#[route(path = "/settings")]
fn settings_route() -> VirtualNode {
    SettingsView::new().render()
}

fn download_contributors_json(store: Provided<Rc<RefCell<Store>>>) {
    // In order to check if the download has already been initiated, we must
    // wrap the possibility of a download attempt in a closure and pass it to
    // request_animation_frame. This is due to store already being mutably
    // borrowed, since this method will be called from the `Store.msg` function.
    //
    // TODO: Do this in `Store.msg` instead of needing to do it in every on_visit callback
    let raf_closure = Closure::wrap(Box::new(move || {
        if !store.borrow().has_initiated_contributors_download() {
            store.borrow_mut().msg(&Msg::InitiatedContributorsDownload);

            let store = Rc::clone(&store);
            let callback = Closure::wrap(Box::new(move |json: JsValue| {
                store.borrow_mut().msg(&Msg::SetContributorsJson(json));
            }) as Box<dyn FnMut(JsValue)>);
            download_json(
                "https://api.github.com/repos/chinedufn/percy/contributors",
                callback.as_ref().unchecked_ref(),
            );

            // TODO: Store and drop the callback instead of leaking memory.
            callback.forget();
        }
    }) as Box<dyn FnMut()>);

    web_sys::window()
        .unwrap()
        .request_animation_frame(raf_closure.as_ref().unchecked_ref())
        .unwrap();

    // TODO: We don't want to repeatedly forget this closure and should instead figure out a place
    // to store it.
    // Maybe make our `Store`'s msg handler for Msg::SetPath call `on_visit` inside of a RAF..
    raf_closure.forget();
}

// @book end on-visit-example

fn make_router(store: Rc<RefCell<Store>>) -> Rc<Router> {
    let mut router = Router::default();

    router.provide(store);

    router.set_route_handlers(create_routes![
        home_route,
        initial_route,
        sign_in_route,
        targets_route,
        target_route,
        tasks_route,
        settings_route
    ]);

    Rc::new(router)
}
