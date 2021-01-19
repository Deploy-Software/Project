use serde::{Deserialize, Serialize};
use serde_json;

mod msg;
pub use self::msg::Msg;

#[derive(Serialize, Deserialize)]
pub struct State {
    token: Option<String>,
    path: String,
    contributors: Option<Vec<PercyContributor>>,
    has_initiated_contributors_download: bool,
}

impl State {
    pub fn new(token: Option<String>) -> State {
        State {
            path: "/".to_string(),
            token: token,
            contributors: None,
            has_initiated_contributors_download: false,
        }
    }

    pub fn from_json(state_json: &str) -> State {
        serde_json::from_str(state_json).unwrap()
    }
}

impl State {
    pub fn to_json(&self) -> String {
        serde_json::to_string(&self).unwrap()
    }
}

impl State {
    pub fn msg(&mut self, msg: &Msg) {
        match msg {
            Msg::SetToken(token) => match token {
                Some(token) => self.set_token(Some(token.to_string())),
                None => self.set_token(None),
            },
            Msg::SetPath(path) => self.set_path(path.to_string()),
            Msg::SetContributorsJson(json) => {
                self.contributors = Some(json.into_serde().unwrap());
            }
            Msg::InitiatedContributorsDownload => {
                self.has_initiated_contributors_download = true;
            }
        };
    }

    pub fn click_count(&self) -> Option<&str> {
        match &self.token {
            Some(token) => Some(token),
            None => None,
        }
    }

    pub fn path(&self) -> &str {
        &self.path
    }

    pub fn contributors(&self) -> &Option<Vec<PercyContributor>> {
        &self.contributors
    }

    pub fn has_initiated_contributors_download(&self) -> &bool {
        &self.has_initiated_contributors_download
    }
}

impl State {
    fn set_token(&mut self, token: Option<String>) {
        self.token = token;
    }

    fn set_path(&mut self, path: String) {
        self.path = path;
    }
}

// Serde ignores fields not in this struct when deserializing
#[derive(Serialize, Deserialize)]
pub struct PercyContributor {
    /// Github username.
    pub login: String,
    /// Github profile URL. E.g. https://github.com/username
    pub html_url: String,
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn serialize_deserialize() {
        let state_json = r#"{"click_count":5,"path":"/","contributors":null,"has_initiated_contributors_download":false}"#;

        let state = State::from_json(state_json);

        assert_eq!(state.click_count(), 5);

        assert_eq!(&state.to_json(), state_json);
    }
}
