use crate::views::icons::*;
use crate::views::sidebar::Pages;
use crate::views::sidebar::SidebarView;
use crate::views::toolbar::ToolbarView;

use virtual_dom_rs::prelude::*;

enum StatisticsIcon {
    Users,
    Mail,
    Click,
}

struct StatisticCard {
    title: &'static str,
    number: &'static str,
    change: &'static str,
    icon: StatisticsIcon,
    positive: bool,
}

impl StatisticCard {
    pub fn new(
        title: &'static str,
        number: &'static str,
        change: &'static str,
        icon: StatisticsIcon,
        positive: bool,
    ) -> Self {
        Self {
            title,
            number,
            change,
            icon,
            positive,
        }
    }
}

impl View for StatisticCard {
    fn render(&self) -> VirtualNode {
        let text_class = match self.positive {
            true => format!("ml-2 flex items-baseline text-sm font-semibold text-green-600"),
            false => format!("ml-2 flex items-baseline text-sm font-semibold text-red-600"),
        };

        let arrow_icon = match self.positive {
            true => arrow_up_icon("self-center flex-shrink-0 h-5 w-5 text-green-500"),
            false => arrow_down_icon("self-center flex-shrink-0 h-5 w-5 text-red-500"),
        };

        let helper_text = match self.positive {
            true => "Increased by",
            false => "Decreased by",
        };

        let icon = match &self.icon {
            StatisticsIcon::Users => users_icon("h-6 w-6 text-white"),
            StatisticsIcon::Mail => mail_icon("h-6 w-6 text-white"),
            StatisticsIcon::Click => click_icon("h-6 w-6 text-white"),
        };

        html! {
            <div class="bg-white overflow-hidden shadow rounded-lg">
                <div class="px-4 py-5 sm:p-6">
                    <div class="flex items-center">
                        <div class="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                            {icon}
                        </div>
                        <div class="ml-5 w-0 flex-1">
                            <dt class="text-sm font-medium text-gray-500 truncate">
                                {self.title}
                            </dt>
                            <dd class="flex items-baseline">
                                <div class="text-2xl font-semibold text-gray-900">
                                    {self.number}
                                </div>
                                <div class={text_class}>
                                    {arrow_icon}
                                    <span class="sr-only">
                                        {helper_text}
                                    </span>
                                    {self.change}
                                </div>
                            </dd>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 px-4 py-4 sm:px-6">
                    <div class="text-sm">
                        <a
                            href="/targets/1"
                            class="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            View target
                            <span class="sr-only"> {self.title}</span>
                        </a>
                    </div>
                </div>
            </div>
        }
    }
}

struct TaskListCard {
    action: &'static str,
    target: &'static str,
    date: &'static str,
    status: &'static str,
    last_one: bool,
}

impl TaskListCard {
    pub fn new(
        action: &'static str,
        target: &'static str,
        date: &'static str,
        status: &'static str,
        last_one: bool,
    ) -> Self {
        Self {
            action,
            target,
            date,
            status,
            last_one,
        }
    }
}

impl View for TaskListCard {
    fn render(&self) -> VirtualNode {
        html! {
                                <li>
                                  <div class="relative pb-8">
                                    {if !self.last_one {
                                        html!{
                                            <span
                                                class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                                ariaHidden="true"
                                            ></span>
                                        }
                                    }}
                                    <div class="relative flex space-x-3">
                                        {if self.status == "In Progress" {
                                            html!{
                                                <div>
                                                    <span class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white"></span>
                                                </div>
                                            }
                                        }}
                                      {if self.status == "Finished" {
        html!{                                <div>
                                          <span class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                                            <svg
                                              class="h-5 w-5 text-white"
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 20 20"
                                              fill="currentColor"
                                              ariaHidden="true"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                              />
                                            </svg>
                                          </span>
                                        </div>
        }
        }}
                                      <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                        <div>
                                          <p class="text-sm text-gray-500">
                                            {self.action}{" "}
                                            <a href="#" class="font-medium text-gray-900">
                                              {self.target}
                                            </a>
                                          </p>
                                        </div>
                                        <div class="text-right text-sm whitespace-nowrap text-gray-500">
                                          <time dateTime="2020-09-20">{self.date}</time>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                    }
    }
}

pub struct HomeView {}

impl HomeView {
    pub fn new() -> HomeView {
        HomeView {}
    }
}

impl View for HomeView {
    fn render(&self) -> VirtualNode {
        let nav_bar = SidebarView::new(Pages::Home).render();
        let toolbar = ToolbarView::new("Home").render();

        let statistics_list: Vec<VirtualNode> = vec![
            StatisticCard::new(
                "Total Subscribers",
                "71,897",
                "122",
                StatisticsIcon::Users,
                true,
            ),
            StatisticCard::new(
                "Avg. Open Rate",
                "58.16%",
                "5.4%",
                StatisticsIcon::Mail,
                true,
            ),
            StatisticCard::new(
                "Avg. Click Rate",
                "24.57%",
                "3.2%",
                StatisticsIcon::Click,
                false,
            ),
        ]
        .into_iter()
        .map(|item_num| item_num.render())
        .collect();

        let task_list: Vec<VirtualNode> = vec![
            TaskListCard::new(
                "Applied to",
                "Front End Developer",
                "Sep 20",
                "Finished",
                false,
            ),
            TaskListCard::new(
                "Applied to",
                "Front End Developer",
                "Sep 20",
                "In Progress",
                false,
            ),
            TaskListCard::new(
                "Applied to",
                "Front End Developer",
                "Sep 20",
                "Finished",
                false,
            ),
            TaskListCard::new(
                "Applied to",
                "Front End Developer",
                "Sep 20",
                "In Progress",
                false,
            ),
            TaskListCard::new(
                "Applied to",
                "Front End Developer",
                "Sep 20",
                "Finished",
                true,
            ),
        ]
        .into_iter()
        .map(|item_num| item_num.render())
        .collect();

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
                    { statistics_list }
                   </dl>
                  </div>
                  <div class="mt-4">
                    <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">
                      Work
                    </h2>
                    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="px-4 pt-5 sm:px-6 sm:pt-6">
          <dt class="text-sm font-medium text-gray-500 truncate">Tasks</dt>
        </div>
        <div class="px-4 py-5 sm:p-6">
          <div class="flex items-center">
            <div class="flow-root">
              <ul class="-mb-8">
              { task_list }
              </ul>
            </div>
          </div>
        </div>
        </div>
                   </dl>
                  </div>
                </div>
              </main>
            </div>
          </div>
            }
    }
}
