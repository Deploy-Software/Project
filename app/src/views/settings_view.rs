use crate::views::sidebar::Pages;
use crate::views::sidebar::SidebarView;
use crate::views::toolbar::ToolbarView;

use virtual_dom_rs::prelude::*;

pub struct SettingsView {}

impl SettingsView {
    pub fn new() -> SettingsView {
        SettingsView {}
    }
}

impl View for SettingsView {
    fn render(&self) -> VirtualNode {
        let nav_bar = SidebarView::new(Pages::Settings).render();
        let toolbar = ToolbarView::new("Settings").render();

        html! {
        <div>
          <div class="h-screen flex overflow-hidden bg-white">
            { nav_bar }
            <main
              class="flex-1 relative z-0 overflow-y-auto focus:outline-none"
              tabIndex={0}
            >
              { toolbar }
              <div class="hidden mt-8 mx-8 sm:block">
                <div>
                  <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">
                    Targets
                  </h2>
                  <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                 </dl>
                </div>
                <div class="mt-4">
                  <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">
                    Work
                  </h2>
                  <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                 </dl>
                </div>
              </div>
            </main>
          </div>
        </div>
          }
    }
}
