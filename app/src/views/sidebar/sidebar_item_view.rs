use super::super::icons::*;
use super::Pages;
use virtual_dom_rs::prelude::*;

pub struct PrimarySidebarItemView {
    path: &'static str,
    text: &'static str,
    page: Pages,
    active: bool,
}

impl PrimarySidebarItemView {
    pub fn new(
        path: &'static str,
        text: &'static str,
        page: Pages,
        active: bool,
    ) -> PrimarySidebarItemView {
        PrimarySidebarItemView {
            path,
            text,
            page,
            active,
        }
    }
}

impl View for PrimarySidebarItemView {
    fn render(&self) -> VirtualNode {
        let class = match self.active {
            true => "bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md",
            false => "text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md",
        };

        let icon_class = "text-gray-500 mr-4 h-6 w-6";

        let icon = match self.page {
            Pages::Home => home_icon(icon_class),
            Pages::Targets => targets_icon(icon_class),
            Pages::Tasks => tasks_icon(icon_class),
            Pages::Settings => settings_icon(icon_class),
        };

        html! {
         <a
           href={self.path}
             class={class}
         >
           { icon }
           { self.text }
         </a>
        }
    }
}

pub struct SecondarySidebarItemView {
    path: &'static str,
    text: &'static str,
    color: &'static str,
    active: bool,
}

impl SecondarySidebarItemView {
    pub fn new(
        path: &'static str,
        text: &'static str,
        color: &'static str,
        active: bool,
    ) -> SecondarySidebarItemView {
        SecondarySidebarItemView {
            path,
            text,
            color,
            active,
        }
    }
}

impl View for SecondarySidebarItemView {
    fn render(&self) -> VirtualNode {
        let class = match self.active {
            true => "group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-900 bg-gray-200",
            false =>  "group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50",
        };

        let dot = format!("w-2.5 h-2.5 mr-4 rounded-full {}", self.color);

        html! {
        <a
          href={self.path}
          class={class}
          >
          <span
            class={dot}
            ariaHidden="true"
          ></span>
          <span className="truncate">{self.text}</span>
        </a>
         }
    }
}
