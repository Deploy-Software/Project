use crate::store::Store;
use crate::views::home_view::HomeView;
use std::cell::RefCell;
use std::rc::Rc;
use virtual_dom_rs::prelude::*;

fn hero() -> VirtualNode {
    html! {
      <header>
      <div class="relative bg-gray-100 overflow-hidden">
        <div class="max-w-7xl mx-auto">
          <div class="relative z-10 pb-8 bg-gray-100 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-100 transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              ariaHidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                class="relative flex items-center justify-between sm:h-10 lg:justify-start"
                ariaLabel="Global"
              >
                <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div class="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span class="sr-only">Workflow</span>
                      <img
                        class="h-8 w-auto sm:h-10"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      />
                    </a>
                    <div class="-mr-2 flex items-center md:hidden">
                      <button
                        type="button"
                        class="bg-gray-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        id="main-menu"
                        ariaHaspopup="true"
                      >
                        <span class="sr-only">Open main menu</span>
                        <svg
                          class="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          ariaHidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  <a
                    href="#"
                    class="font-medium text-gray-500 hover:text-gray-900"
                  >
                    Product
                  </a>

                  <a
                    href="#"
                    class="font-medium text-gray-500 hover:text-gray-900"
                  >
                    Features
                  </a>

                  <a
                    href="#"
                    class="font-medium text-gray-500 hover:text-gray-900"
                  >
                    Marketplace
                  </a>

                  <a
                    href="#"
                    class="font-medium text-gray-500 hover:text-gray-900"
                  >
                    Company
                  </a>

                  <a
                    href="#"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Log in
                  </a>
                </div>
              </nav>
            </div>

            <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div class="rounded-lg shadow-md bg-gray-100 ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      class="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt=""
                    />
                  </div>
                  <div class="-mr-2">
                    <button
                      type="button"
                      class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <span class="sr-only">Close main menu</span>
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        ariaHidden="true"
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
                </div>
                <div
                  role="menu"
                  ariaOrientation="vertical"
                  ariaLabelledby="main-menu"
                >
                  <div class="px-2 pt-2 pb-3 space-y-1" role="none">
                    <a
                      href="#"
                      class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      role="menuitem"
                    >
                      Product
                    </a>

                    <a
                      href="#"
                      class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      role="menuitem"
                    >
                      Features
                    </a>

                    <a
                      href="#"
                      class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      role="menuitem"
                    >
                      Marketplace
                    </a>

                    <a
                      href="#"
                      class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      role="menuitem"
                    >
                      Company
                    </a>
                  </div>
                  <div role="none">
                    <a
                      href="#"
                      class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div class="sm:text-center lg:text-left">
                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span class="block xl:inline">Project Management </span>
                  <span class="block text-indigo-600 xl:inline">
                    for Remote Teams
                  </span>
                </h1>
                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  A tool created for remote working software teams. Automate
                  the boring tasks to focus on what matters. Reduce the number
                  of meetings and improve your productivity.
                </p>
                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div class="rounded-md shadow">
                    <a
                      href="#"
                      class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-14"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt=""
          />
        </div>
      </div>
      </header>
    }
}

fn features() -> VirtualNode {
    html! {
      <section>
      <div class="bg-white">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div>
            <h2 class="text-base font-semibold text-indigo-600 uppercase tracking-wide">
              Everything you need
            </h2>
            <p class="mt-2 text-3xl font-extrabold text-gray-900">
              All-in-one platform
            </p>
            <p class="mt-4 text-lg text-gray-500">
              We want to centralize the tools needed to build software, and
              integrate the tools you already use.
            </p>
          </div>
          <div class="mt-12 lg:mt-0 lg:col-span-2">
            <dl class="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
              <div class="flex">
                <svg
                  class="flex-shrink-0 h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  ariaHidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div class="ml-3">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Timeline
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    You can manage phone, email and chat conversations all
                    from a single mailbox.
                  </dd>
                </div>
              </div>

              <div class="flex">
                <svg
                  class="flex-shrink-0 h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  ariaHidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div class="ml-3">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Kanban
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    You can manage phone, email and chat conversations all
                    from a single mailbox.
                  </dd>
                </div>
              </div>

              <div class="flex">
                <svg
                  class="flex-shrink-0 h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  ariaHidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div class="ml-3">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Chat
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    You can manage phone, email and chat conversations all
                    from a single mailbox.
                  </dd>
                </div>
              </div>

              <div class="flex">
                <svg
                  class="flex-shrink-0 h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  ariaHidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div class="ml-3">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Feed
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    You can manage phone, email and chat conversations all
                    from a single mailbox.
                  </dd>
                </div>
              </div>

              <div class="flex">
                <svg
                  class="flex-shrink-0 h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  ariaHidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div class="ml-3">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Check-ins
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    Find what you need with advanced filters, bulk actions,
                    and quick views.
                  </dd>
                </div>
              </div>

              <div class="flex">
                <svg
                  class="flex-shrink-0 h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  ariaHidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div class="ml-3">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Integrations
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    Find what you need with advanced filters, bulk actions,
                    and quick views.
                  </dd>
                </div>
              </div>

              <div class="flex">
                <svg
                  class="flex-shrink-0 h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  ariaHidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div class="ml-3">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Deadlines
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    Find what you need with advanced filters, bulk actions,
                    and quick views.
                  </dd>
                </div>
              </div>

              <div class="flex">
                <svg
                  class="flex-shrink-0 h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  ariaHidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div class="ml-3">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Cost
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    Find what you need with advanced filters, bulk actions,
                    and quick views.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
    }
}

fn pricing() -> VirtualNode {
    html! {
      <div class="bg-gray-100">
      <div class="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
        <div class="text-center">
          <h2 class="text-lg leading-6 font-semibold text-gray-600 uppercase tracking-wider">
            Pricing
          </h2>
          <p class="mt- text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            We pay for ourselves
          </p>
          <p class="mt-3 max-w-4xl mx-auto text-xl text-gray-600 sm:mt-5 sm:text-2xl">
            Engineering time is expensive. We help you increase the time
            engineers spend on building product. Try it for free, what do
            you have to lose?
          </p>
        </div>
      </div>

      <div class="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
        <div class="relative z-0">
          <div class="absolute inset-0 h-5/6 bg-gray-100 lg:h-2/3"></div>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="relative lg:grid lg:grid-cols-7">
              <div class="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                <div class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                  <div class="flex-1 flex flex-col">
                    <div class="bg-white px-6 py-10">
                      <div>
                        <h3
                          class="text-center text-2xl font-medium text-gray-900"
                          id="tier-hobby"
                        >
                          Hobby
                        </h3>
                        <div class="mt-4 flex items-center justify-center">
                          <span class="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                            <span class="mt-2 mr-2 text-4xl font-medium">
                              $
                            </span>
                            <span class="font-extrabold">0</span>
                          </span>
                          <span class="text-xl font-medium text-gray-500">
                            /month
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul class="space-y-4">
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <svg
                              class="flex-shrink-0 h-6 w-6 text-green-500"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              ariaHidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p class="ml-3 text-base font-medium text-gray-500">
                            Unlimited projects
                          </p>
                        </li>

                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <svg
                              class="flex-shrink-0 h-6 w-6 text-green-500"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              ariaHidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p class="ml-3 text-base font-medium text-gray-500">
                            Unlimited members
                          </p>
                        </li>

                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <svg
                              class="flex-shrink-0 h-6 w-6 text-green-500"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              ariaHidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p class="ml-3 text-base font-medium text-gray-500">
                            Community support
                          </p>
                        </li>
                      </ul>
                      <div class="mt-8">
                        <div class="rounded-lg shadow-md">
                          <a
                            href="#"
                            class="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50"
                            ariaDescribedby="tier-hobby"
                          >
                            Sign up for free
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                <div class="relative z-10 rounded-lg shadow-xl">
                  <div
                    class="pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600"
                    ariaHidden="true"
                  ></div>
                  <div class="absolute inset-x-0 top-0 transform translate-y-px">
                    <div class="flex justify-center transform -translate-y-1/2">
                      <span class="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                        Most popular
                      </span>
                    </div>
                  </div>
                  <div class="bg-white rounded-t-lg px-6 pt-12 pb-10">
                    <div>
                      <h3
                        class="text-center text-3xl font-semibold text-gray-900 sm:-mx-6"
                        id="tier-growth"
                      >
                        Production
                      </h3>
                      <div class="mt-4 flex items-center justify-center">
                        <span class="px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl">
                          <span class="mt-2 mr-2 text-4xl font-medium">
                            $
                          </span>
                          <span class="font-extrabold">249</span>
                        </span>
                        <span class="text-2xl font-medium text-gray-500">
                          /month
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                    <ul class="space-y-4">
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg
                            class="flex-shrink-0 h-6 w-6 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            ariaHidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p class="ml-3 text-base font-medium text-gray-500">
                          Dedicated support
                        </p>
                      </li>

                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg
                            class="flex-shrink-0 h-6 w-6 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            ariaHidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p class="ml-3 text-base font-medium text-gray-500">
                          First to know new features
                        </p>
                      </li>

                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg
                            class="flex-shrink-0 h-6 w-6 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            ariaHidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p class="ml-3 text-base font-medium text-gray-500">
                          Decide what features get added
                        </p>
                      </li>

                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg
                            class="flex-shrink-0 h-6 w-6 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            ariaHidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p class="ml-3 text-base font-medium text-gray-500">
                          Tips on how the product can improve your workflow
                        </p>
                      </li>

                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg
                            class="flex-shrink-0 h-6 w-6 text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            ariaHidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p class="ml-3 text-base font-medium text-gray-500">
                          Enable us to keep developing
                        </p>
                      </li>
                    </ul>
                    <div class="mt-10">
                      <div class="rounded-lg shadow-md">
                        <a
                          href="#"
                          class="block w-full text-center rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-indigo-700"
                          ariaDescribedby="tier-growth"
                        >
                          Enroll
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                <div class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                  <div class="flex-1 flex flex-col">
                    <div class="bg-white px-6 py-10">
                      <div>
                        <h3
                          class="text-center text-2xl font-medium text-gray-900"
                          id="tier-scale"
                        >
                          Self-hosted
                        </h3>
                        <div class="mt-4 flex items-center justify-center">
                          <span class="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                            <span class="mt-2 mr-2 text-4xl font-medium">
                              $
                            </span>
                            <span class="font-extrabold">0</span>
                          </span>
                          <span class="text-xl font-medium text-gray-500">
                            /month
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul class="space-y-4">
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <svg
                              class="flex-shrink-0 h-6 w-6 text-green-500"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              ariaHidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p class="ml-3 text-base font-medium text-gray-500">
                            Own your data
                          </p>
                        </li>

                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <svg
                              class="flex-shrink-0 h-6 w-6 text-green-500"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              ariaHidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p class="ml-3 text-base font-medium text-gray-500">
                            Community support
                          </p>
                        </li>

                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <svg
                              class="flex-shrink-0 h-6 w-6 text-green-500"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              ariaHidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p class="ml-3 text-base font-medium text-gray-500">
                            Can be combined with Production
                          </p>
                        </li>
                      </ul>
                      <div class="mt-8">
                        <div class="rounded-lg shadow-md">
                          <a
                            href="#"
                            class="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50"
                            ariaDescribedby="tier-scale"
                          >
                            Documentation
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    }
}

fn blog() -> VirtualNode {
    html! {
      <section>
      <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div class="absolute inset-0">
          <div class="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div class="relative max-w-7xl mx-auto">
          <div class="text-center">
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Our progress
            </h2>
            <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Read about how we are progressing, almost in real time.
            </p>
          </div>
          <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                  alt=""
                />
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm font-medium text-indigo-600">
                    <a href="#" class="hover:underline">
                      Article
                    </a>
                  </p>
                  <a href="#" class="block mt-2">
                    <p class="text-xl font-semibold text-gray-900">
                      Boost your conversion rate
                    </p>
                    <p class="mt-3 text-base text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Architecto accusantium praesentium eius, ut
                      atque fuga culpa, similique sequi cum eos quis
                      dolorum.
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <a href="#">
                      <span class="sr-only">Roel Aufderehar</span>
                      <img
                        class="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#" class="hover:underline">
                        Roel Aufderehar
                      </a>
                    </p>
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time dateTime="2020-03-16">Mar 16, 2020</time>
                      <span ariaHidden="true">&middot;</span>
                      <span>6 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                  alt=""
                />
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm font-medium text-indigo-600">
                    <a href="#" class="hover:underline">
                      Video
                    </a>
                  </p>
                  <a href="#" class="block mt-2">
                    <p class="text-xl font-semibold text-gray-900">
                      How to use search engine optimization to drive sales
                    </p>
                    <p class="mt-3 text-base text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Velit facilis asperiores porro quaerat
                      doloribus, eveniet dolore. Adipisci tempora aut
                      inventore optio animi., tempore temporibus quo
                      laudantium.
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <a href="#">
                      <span class="sr-only">Brenna Goyette</span>
                      <img
                        class="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#" class="hover:underline">
                        Brenna Goyette
                      </a>
                    </p>
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time dateTime="2020-03-10">Mar 10, 2020</time>
                      <span ariaHidden="true">&middot;</span>
                      <span>4 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                  alt=""
                />
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm font-medium text-indigo-600">
                    <a href="#" class="hover:underline">
                      Case Study
                    </a>
                  </p>
                  <a href="#" class="block mt-2">
                    <p class="text-xl font-semibold text-gray-900">
                      Improve your customer experience
                    </p>
                    <p class="mt-3 text-base text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Sint harum rerum voluptatem quo recusandae magni
                      placeat saepe molestiae, sed excepturi cumque corporis
                      perferendis hic.
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <a href="#">
                      <span class="sr-only">Daniela Metz</span>
                      <img
                        class="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#" class="hover:underline">
                        Daniela Metz
                      </a>
                    </p>
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time dateTime="2020-02-12">Feb 12, 2020</time>
                      <span ariaHidden="true">&middot;</span>
                      <span>11 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    }
}

fn cta() -> VirtualNode {
    html! {
      <section>
      <div class="bg-white">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div class="bg-indigo-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div class="lg:self-center">
                <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                  <span class="block">Get real.</span>
                  <span class="block">You have heard enough.</span>
                </h2>
                <p class="mt-4 text-lg leading-6 text-indigo-200">
                  You can read all you want but there is only one action
                  that is going to actually improve your workflow.
                </p>
                <a
                  href="#"
                  class="mt-8 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
                >
                  Sign up
                </a>
              </div>
            </div>
            <div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                class="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    }
}

fn footer() -> VirtualNode {
    html! {
      <footer class="bg-white" ariaLabelledby="footerHeading">
      <h2 id="footerHeading" class="sr-only">
        Footer
      </h2>
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-8 xl:col-span-1">
            <img
              class="h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-gray-300.svg"
              alt="Company name"
            />
            <p class="text-gray-500 text-base">Time is money, friend!</p>
            <div class="flex space-x-6">
              <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Facebook</span>
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  ariaHidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Instagram</span>
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  ariaHidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Twitter</span>
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  ariaHidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>

              <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">GitHub</span>
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  ariaHidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Dribbble</span>
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  ariaHidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Solutions
                </h3>
                <ul class="mt-4 space-y-4">
                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-500 hover:text-gray-900"
                    >
                      Marketing
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-500 hover:text-gray-900"
                    >
                      Analytics
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-500 hover:text-gray-900"
                    >
                      Commerce
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-500 hover:text-gray-900"
                    >
                      Insights
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-12 md:mt-0">
                <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Support
                </h3>
                <ul class="mt-4 space-y-4">
                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-500 hover:text-gray-900"
                    >
                      Pricing
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-500 hover:text-gray-900"
                    >
                      Documentation
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-500 hover:text-gray-900"
                    >
                      Guides
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-500 hover:text-gray-900"
                    >
                      API Status
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul class="mt-4 space-y-4">
                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-500 hover:text-gray-900"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-500 hover:text-gray-900"
                    >
                      Blog
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-500 hover:text-gray-900"
                    >
                      Jobs
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-500 hover:text-gray-900"
                    >
                      Press
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-500 hover:text-gray-900"
                    >
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-12 md:mt-0">
                <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul class="mt-4 space-y-4">
                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-500 hover:text-gray-900"
                    >
                      Claim
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-500 hover:text-gray-900"
                    >
                      Privacy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="text-base text-gray-500 hover:text-gray-900"
                    >
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 border-t border-gray-200 pt-8">
          <p class="text-base text-gray-400 xl:text-center">
            &copy; 2021 Deploy Software. All rights reserved.
          </p>
        </div>
      </div>
      </footer>
    }
}

fn index() -> VirtualNode {
    html! {
    <div>
    {hero()}

    <main>
    {features()}
    {pricing()}
    {blog()}
    {cta()}
    </main>
    {footer()}
    <div class="fixed bottom-0 inset-x-0 pb-2 sm:pb-5">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="p-2 rounded-lg bg-indigo-600 shadow-lg sm:p-3">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
            <span class="flex p-2 rounded-lg bg-indigo-800">
              <svg
                class="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                ariaHidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </span>
            <p class="ml-3 font-medium text-white truncate">
              <span class="md:hidden">We announced a new product!</span>
              <span class="hidden md:inline">
                Big news! We have finally launched our beta!
              </span>
            </p>
          </div>
          <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="#"
              class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Learn more
            </a>
          </div>
          <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
            <button
              type="button"
              class="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span class="sr-only">Dismiss</span>
              <svg
                class="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                ariaHidden="true"
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
        </div>
      </div>
    </div>
    </div>
    </div>
        }
}

pub struct IndexView {
    store: Rc<RefCell<Store>>,
}

impl IndexView {
    pub fn new(store: Rc<RefCell<Store>>) -> IndexView {
        IndexView { store }
    }
}

impl View for IndexView {
    fn render(&self) -> VirtualNode {
        let store = self.store.borrow();
        let token = store.token().to_owned();

        match token {
            Some(_token) => {
                let home = HomeView::new();
                home.render()
            }
            None => index(),
        }
    }
}
