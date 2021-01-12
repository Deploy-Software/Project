import React from "react";
import {
  HomeIcon,
  TaskIcon,
  DirectoryIcon,
  TargetsIcon,
  ChatIcon,
  FeedIcon,
  SettingsIcon,
} from "./Icon";

type Pages =
  | "Home"
  | "Targets"
  | "Tasks"
  | "Chat"
  | "Feed"
  | "Directory"
  | "Settings";

type Projects = "Engineering" | "Human Resources" | "Customer Success";

interface PrimarySidebarItemProps {
  icon: JSX.Element;
  link: string;
  name: Pages;
}

interface SecondarySidebarItemProps {
  color: string;
  name: string;
}

interface SidebarProps {
  activePage: Pages;
}

const Sidebar = ({ activePage }: SidebarProps): JSX.Element => {
  const PrimarySidebarItem = ({
    link,
    icon,
    name,
  }: PrimarySidebarItemProps): JSX.Element => {
    return (
      <a
        href={link}
        className={
          activePage === name
            ? "bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
        }
      >
        {icon}
        {name}
      </a>
    );
  };

  const SecondarySidebarItem = ({
    color,
    name,
  }: SecondarySidebarItemProps): JSX.Element => {
    return (
      <a
        href="#"
        className={
          activeProject === name
            ? "group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-900 bg-gray-200"
            : "group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
        }
      >
        <span
          className={`w-2.5 h-2.5 mr-4 rounded-full ${color}`}
          aria-hidden="true"
        ></span>
        <span className="truncate">{name}</span>
      </a>
    );
  };

  const PrimaryMobileSidebarItem = ({
    link,
    icon,
    name,
  }: PrimarySidebarItemProps): JSX.Element => {
    return (
      <a
        href={link}
        className={
          activePage === name
            ? "bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
        }
      >
        {icon}
        {name}
      </a>
    );
  };

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
                  <PrimaryMobileSidebarItem
                    name={"Home"}
                    link={"/"}
                    icon={<HomeIcon className="text-gray-500 mr-4 h-6 w-6" />}
                  />
                  <PrimaryMobileSidebarItem
                    name={"Targets"}
                    link={"/targets"}
                    icon={
                      <TargetsIcon className="text-gray-500 mr-4 h-6 w-6" />
                    }
                  />
                  <PrimaryMobileSidebarItem
                    name={"Tasks"}
                    link={"/tasks"}
                    icon={<TaskIcon className="text-gray-500 mr-4 h-6 w-6" />}
                  />
                  <PrimaryMobileSidebarItem
                    name={"Feed"}
                    link={"/feed"}
                    icon={<FeedIcon className="text-gray-500 mr-4 h-6 w-6" />}
                  />
                  <PrimaryMobileSidebarItem
                    name={"Chat"}
                    link={"/chat"}
                    icon={<ChatIcon className="text-gray-500 mr-4 h-6 w-6" />}
                  />
                </div>
                <hr
                  className="border-t border-gray-200 my-5"
                  aria-hidden="true"
                />
                <div className="px-2 space-y-1">
                  <PrimaryMobileSidebarItem
                    name={"Directory"}
                    link={"/directory"}
                    icon={
                      <DirectoryIcon className="text-gray-500 mr-4 h-6 w-6" />
                    }
                  />

                  <PrimaryMobileSidebarItem
                    name={"Settings"}
                    link={"/settings"}
                    icon={
                      <DirectoryIcon className="text-gray-500 mr-4 h-6 w-6" />
                    }
                  />
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
                  <PrimarySidebarItem
                    name={"Home"}
                    link={"/dashboard"}
                    icon={<HomeIcon className="text-gray-500 mr-4 h-6 w-6" />}
                  />
                  <PrimarySidebarItem
                    name={"Targets"}
                    link={"/targets"}
                    icon={
                      <TargetsIcon className="text-gray-500 mr-4 h-6 w-6" />
                    }
                  />

                  <PrimarySidebarItem
                    name={"Tasks"}
                    link={"/tasks"}
                    icon={<TaskIcon className="text-gray-500 mr-4 h-6 w-6" />}
                  />
                  <PrimarySidebarItem
                    name={"Feed"}
                    link={"/feed"}
                    icon={<FeedIcon className="text-gray-500 mr-4 h-6 w-6" />}
                  />
                  <PrimarySidebarItem
                    name={"Chat"}
                    link={"/chat"}
                    icon={<ChatIcon className="text-gray-500 mr-4 h-6 w-6" />}
                  />
                </div>
                <hr
                  className="border-t border-gray-200 my-5"
                  aria-hidden="true"
                />
                <div className="flex-1 px-2 space-y-1">
                  <PrimarySidebarItem
                    name={"Directory"}
                    link={"/directory"}
                    icon={
                      <DirectoryIcon className="text-gray-500 mr-4 h-6 w-6" />
                    }
                  />
                  <PrimarySidebarItem
                    name={"Settings"}
                    link={"/settings"}
                    icon={
                      <SettingsIcon className="text-gray-500 mr-4 h-6 w-6" />
                    }
                  />
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
                    <SecondarySidebarItem
                      name={"Engineering"}
                      color={"bg-indigo-500"}
                    />
                    <SecondarySidebarItem
                      name={"Human Resources"}
                      color={"bg-green-500"}
                    />
                    <SecondarySidebarItem
                      name={"Customer Success"}
                      color={"bg-yellow-500"}
                    />
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
