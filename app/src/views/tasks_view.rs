use crate::views::sidebar::Pages;
use crate::views::sidebar::SidebarView;
use crate::views::toolbar::ToolbarView;

use virtual_dom_rs::prelude::*;

pub struct TasksView {}

impl TasksView {
    pub fn new() -> TasksView {
        TasksView {}
    }
}

impl View for TasksView {
    fn render(&self) -> VirtualNode {
        let sidebar = SidebarView::new(Pages::Tasks).render();
        let toolbar = ToolbarView::new("Tasks").render();

        html! {
        <div>
          <div class="h-screen flex overflow-hidden bg-white">
            { sidebar }

        <main
          class="flex-1 relative z-0 overflow-y-auto focus:outline-none"
          tabIndex={0}
        >
            {toolbar}
            <div class="sm:hidden">
            <div class="px-4 sm:px-6">
              <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">
                Tasks
              </h2>
            </div>
            <ul class="mt-3 border-t border-gray-200 divide-y divide-gray-100">
              <li>
                <a
                  href="#"
                  class="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"
                >
                  <span class="flex items-center truncate space-x-3">
                    <span
                      class="w-6 h-6 flex-shrink-0 rounded-full bg-blue-500"
                      ariaHidden="true"
                    ></span>
                    <span class="font-medium truncate text-sm leading-6">
                      Translate app
                    </span>
                  </span>
                  <svg
                    class="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    ariaHidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div class="hidden sm:block">
            <div class="align-middle inline-block min-w-full border-b border-gray-200">
              <table class="min-w-full">
                <thead>
                  <tr class="border-t border-gray-200">
                    <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <span class="lg:pl-2">Axel's Tasks</span>
                    </th>
                    <th class="px-16 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Target
                    </th>
                    <th class="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last updated
                    </th>
                    <th class="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-100">
                  <tr>
                    <td class="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
                      <div class="flex items-center space-x-3 lg:pl-2">
                        <div
                          class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500"
                          ariaHidden="true"
                        ></div>
                        <a
                          href="/tasks/1"
                          class="truncate hover:text-gray-600"
                        >
                          <span>Translate app</span>
                        </a>
                      </div>
                    </td>
                    <td class="hidden md:table-cell px-16 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
                      Total subscribers
                    </td>
                    <td class="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
                      March 17, 2020
                    </td>
                    <td class="pr-6">
                      <div class="relative flex justify-end items-center">
                        <button
                          id="project-options-menu-0"
                          ariaHaspopup="true"
                          type="button"
                          class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                          <span class="sr-only">Open options</span>
                          <svg
                            class="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            ariaHidden="true"
                          >
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
        </div>
        </div>
          }
    }
}
