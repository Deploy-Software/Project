use virtual_dom_rs::prelude::*;

pub struct SidebarItemView {
    path: &'static str,
    text: &'static str,
    active: bool,
}

impl SidebarItemView {
    pub fn new(path: &'static str, text: &'static str, active: bool) -> SidebarItemView {
        SidebarItemView { path, text, active }
    }
}

impl View for SidebarItemView {
    fn render(&self) -> VirtualNode {
        let class = match self.active {
            true => "bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md",
            false => "text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md",
        };

        html! {
         <a
           href={self.path}
             class={class}
         >
           { self.text }
         </a>
        }
    }
}
