use virtual_dom_rs::prelude::*;

pub struct ToolbarView {
    page: &'static str,
}

impl ToolbarView {
    pub fn new(page: &'static str) -> ToolbarView {
        ToolbarView { page }
    }
}

impl View for ToolbarView {
    fn render(&self) -> VirtualNode {
        html! {
        <div class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div class="flex-1 min-w-0">
            <h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">
              {self.page}
            </h1>
          </div>
          /*<div class="mt-4 flex sm:mt-0 sm:ml-4">
            {secondaryButtonName !== undefined && (
              <button
                type="button"
                class="order-1 ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-0 sm:ml-0"
                onClick={() => {
                  secondaryButtonAction();
                }}
              >
                {secondaryButtonName}
              </button>
            )}
            {primaryButtonName !== undefined && (
              <button
                type="button"
                class="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"
                onClick={() => {
                  primaryButtonAction();
                }}
              >
                {primaryButtonName}
              </button>
            )}
          </div>
        </div>*/
          }
    }
}
