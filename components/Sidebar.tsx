import React from "react";
import { HomeIcon, CalendarIcon } from "./Icon";

type Pages =
  | "Home"
  | "Targets"
  | "Tasks"
  | "Chat"
  | "Feed"
  | "Directory"
  | "Settings";

type Projects = "Engineering" | "Human Resources" | "Customer Success";

interface SidebarProps {
  activePage: Pages;
}

const Sidebar = ({ activePage }: SidebarProps): JSX.Element => {
  const activeProject: Projects = "Engineering";

  return (
    <>
      <div className="lg:hidden">
        <div className="fixed inset-0 flex z-40">
          <div className="fixed inset-0">
            <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
          </div>
          <div
            tabIndex={0}
            className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none"
          >
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Close sidebar</span>
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-pink-500-mark-gray-900-text.svg"
                  alt="Workflow"
                />
              </div>
              <nav aria-label="Sidebar" className="mt-5">
                <div className="px-2 space-y-1">
                  <a
                    href="#"
                    className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  >
                    <svg
                      className="text-gray-500 mr-4 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Home
                  </a>

                  <a
                    href="/tasks"
                    className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  >
                    <svg
                      className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Tasks
                  </a>
                  <a
                    href="/directory"
                    className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  >
                    <svg
                      className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Directory
                  </a>

                  <a
                    href="#"
                    className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  >
                    <svg
                      className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      />
                    </svg>
                    Announcements
                  </a>
                </div>
                <hr
                  className="border-t border-gray-200 my-5"
                  aria-hidden="true"
                />
                <div className="px-2 space-y-1">
                  <a
                    href="/settings"
                    className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  >
                    <svg
                      className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Settings
                  </a>
                </div>
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <a href="#" className="flex-shrink-0 group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                      Tom Cook
                    </p>
                    <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                      View profile
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
        </div>
      </div>

      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-gray-100">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-pink-500-mark-gray-900-text.svg"
                  alt="Workflow"
                />
              </div>
              <nav className="mt-5 flex-1" aria-label="Sidebar">
                <div className="px-2 space-y-1">
                  <a
                    href="/dashboard"
                    className={
                      activePage === "Home"
                        ? "bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    }
                  >
                    <HomeIcon className="text-gray-500 mr-3 h-6 w-6" />
                    Home
                  </a>
                  <a
                    href="/targets"
                    className={
                      activePage === "Targets"
                        ? "bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    }
                  >
                    <svg
                      className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    Targets
                  </a>

                  <a
                    href="/tasks"
                    className={
                      activePage === "Tasks"
                        ? "bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    }
                  >
                    <svg
                      className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                    Tasks
                  </a>
                  <a
                    href="/chat"
                    className={
                      activePage === "Chat"
                        ? "bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    }
                  >
                    <svg
                      className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>{" "}
                    Chat
                  </a>
                  <a
                    href="#"
                    className={
                      activePage === "Feed"
                        ? "bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    }
                  >
                    <svg
                      className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      />
                    </svg>
                    Feed
                  </a>
                </div>
                <hr
                  className="border-t border-gray-200 my-5"
                  aria-hidden="true"
                />
                <div className="flex-1 px-2 space-y-1">
                  <a
                    href="/directory"
                    className={
                      activePage === "Directory"
                        ? "bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    }
                  >
                    <svg
                      className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Directory
                  </a>
                  <a
                    href="/settings"
                    className={
                      activePage === "Settings"
                        ? "bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    }
                  >
                    <svg
                      className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Settings
                  </a>
                </div>
                <div className="mt-8">
                  <h3
                    className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                    id="teams-headline"
                  >
                    Projects
                  </h3>
                  <div
                    className="mt-1 space-y-1"
                    role="group"
                    aria-labelledby="teams-headline"
                  >
                    <a
                      href="#"
                      className={
                        activeProject === "Engineering"
                          ? "group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-900 bg-gray-200"
                          : "group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                      }
                    >
                      <span
                        className="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full"
                        aria-hidden="true"
                      ></span>
                      <span className="truncate">Engineering</span>
                    </a>

                    <a
                      href="#"
                      className="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                    >
                      <span
                        className="w-2.5 h-2.5 mr-4 bg-green-500 rounded-full"
                        aria-hidden="true"
                      ></span>
                      <span className="truncate">Human Resources</span>
                    </a>

                    <a
                      href="#"
                      className="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                    >
                      <span
                        className="w-2.5 h-2.5 mr-4 bg-yellow-500 rounded-full"
                        aria-hidden="true"
                      ></span>
                      <span className="truncate">Customer Success</span>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <a href="#" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      Tom Cook
                    </p>
                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                      View profile
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
