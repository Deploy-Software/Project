use virtual_dom_rs::prelude::*;

mod sidebar_item_view;
use self::sidebar_item_view::{PrimarySidebarItemView, SecondarySidebarItemView};

pub struct SidebarView {
    active_page: Pages,
}

impl SidebarView {
    pub fn new(active_page: Pages) -> SidebarView {
        SidebarView { active_page }
    }
}

#[derive(PartialEq)]
pub enum Pages {
    Home,
    Targets,
    Tasks,
    Settings,
}

impl View for SidebarView {
    fn render(&self) -> VirtualNode {
        let home =
            PrimarySidebarItemView::new("/", "Home", Pages::Home, self.active_page == Pages::Home);
        let targets = PrimarySidebarItemView::new(
            "/targets",
            "Targets",
            Pages::Targets,
            self.active_page == Pages::Targets,
        );
        let tasks = PrimarySidebarItemView::new(
            "/tasks",
            "Tasks",
            Pages::Tasks,
            self.active_page == Pages::Tasks,
        );
        let settings = PrimarySidebarItemView::new(
            "/settings",
            "Settings",
            Pages::Settings,
            self.active_page == Pages::Settings,
        );

        let padelboard = SecondarySidebarItemView::new(
            "/projects/padelboard",
            "Padelboard",
            "bg-indigo-500",
            true,
        );

        html! {
        <div class="hidden lg:flex lg:flex-shrink-0">
          <div class="flex flex-col w-64">
            <div class="flex flex-col h-0 flex-1 border-r border-gray-200 bg-gray-100">
              <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div class="flex items-center flex-shrink-0 px-4">
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-pink-500-mark-gray-900-text.svg"
                    alt="Workflow"
                  />
                </div>
                <nav class="mt-5 flex-1" ariaLabel="Sidebar">
                  <div class="px-2 space-y-1">
                    { home.render() }
                    { targets.render() }
                    { tasks.render() }
                  </div>
                  <hr
                    class="border-t border-gray-200 my-5"
                    ariaHidden="true"
                  />
                  <div class="flex-1 px-2 space-y-1">
                  { settings.render() }
                 </div>
                  <div class="mt-8">
                    <h3
                      class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                      id="teams-headline"
                    >
                      Projects
                    </h3>
                    <div
                      class="mt-1 space-y-1"
                      role="group"
                      ariaLabelledby="teams-headline"
                    >
                    { padelboard.render() }
                   </div>
                  </div>
                </nav>
              </div>
              <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
                <a href="#" class="flex-shrink-0 w-full group block">
                  <div class="flex items-center">
                    <div>
                      <img
                        class="inline-block h-9 w-9 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                        Tom Cook
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
          }
    }
}
