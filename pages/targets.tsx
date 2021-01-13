import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Toolbar from "../components/Toolbar";

const Targets = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>
          Deploy Software Projects - Project Management Software for Remote
          Teams
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <div>
        <div className="h-screen flex overflow-hidden bg-white">
          <Sidebar activePage={"Targets"} />
          <main
            className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
            tabIndex={0}
          >
            <Toolbar name={"Targets"} />
            <div className="hidden mt-8 mx-8 sm:block">
              <div>
                <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                  Targets
                </h2>
                <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
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
                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                          </svg>
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Total Subscribers
                          </dt>
                          <dd className="flex items-baseline">
                            <div className="text-2xl font-semibold text-gray-900">
                              71,897
                            </div>

                            <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                              <svg
                                className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="sr-only">Increased by</span>
                              122
                            </div>
                          </dd>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white overflow-hidden border-t border-gray-100">
                      <div className="px-4 pt-5 sm:px-6 sm:pt-6">
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Progress
                        </dt>
                      </div>
                      <div className="px-4 py-5 sm:p-6">
                        <div className="flex items-center">
                          <div className="flow-root">
                            <ul className="-mb-8">
                              <li>
                                <div className="relative pb-8">
                                  <span
                                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                    aria-hidden="true"
                                  ></span>
                                  <div className="relative flex space-x-3">
                                    <div>
                                      <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white"></span>
                                    </div>
                                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                      <div>
                                        <p className="text-sm text-gray-500">
                                          Applied to{" "}
                                          <a
                                            href="#"
                                            className="font-medium text-gray-900"
                                          >
                                            Front End Developer
                                          </a>
                                        </p>
                                      </div>
                                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                        <time dateTime="2020-09-20">
                                          Sep 20
                                        </time>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div className="relative pb-8">
                                  <span
                                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                    aria-hidden="true"
                                  ></span>
                                  <div className="relative flex space-x-3">
                                    <div>
                                      <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white"></span>
                                    </div>
                                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                      <div>
                                        <p className="text-sm text-gray-500">
                                          Advanced to phone screening by{" "}
                                          <a
                                            href="#"
                                            className="font-medium text-gray-900"
                                          >
                                            Bethany Blake
                                          </a>
                                        </p>
                                      </div>
                                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                        <time dateTime="2020-09-22">
                                          Sep 22
                                        </time>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div className="relative pb-8">
                                  <span
                                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                    aria-hidden="true"
                                  ></span>
                                  <div className="relative flex space-x-3">
                                    <div>
                                      <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                                        <svg
                                          className="h-5 w-5 text-white"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      </span>
                                    </div>
                                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                      <div>
                                        <p className="text-sm text-gray-500">
                                          Completed phone screening with{" "}
                                          <a
                                            href="#"
                                            className="font-medium text-gray-900"
                                          >
                                            Martha Gardner
                                          </a>
                                        </p>
                                      </div>
                                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                        <time dateTime="2020-09-28">
                                          Sep 28
                                        </time>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div className="relative pb-8">
                                  <span
                                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                    aria-hidden="true"
                                  ></span>
                                  <div className="relative flex space-x-3">
                                    <div>
                                      <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white"></span>
                                    </div>
                                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                      <div>
                                        <p className="text-sm text-gray-500">
                                          Advanced to interview by{" "}
                                          <a
                                            href="#"
                                            className="font-medium text-gray-900"
                                          >
                                            Bethany Blake
                                          </a>
                                        </p>
                                      </div>
                                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                        <time dateTime="2020-09-30">
                                          Sep 30
                                        </time>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div className="relative pb-8">
                                  <div className="relative flex space-x-3">
                                    <div>
                                      <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                                        <svg
                                          className="h-5 w-5 text-white"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      </span>
                                    </div>
                                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                      <div>
                                        <p className="text-sm text-gray-500">
                                          Completed interview with{" "}
                                          <a
                                            href="#"
                                            className="font-medium text-gray-900"
                                          >
                                            Katherine Snyder
                                          </a>
                                        </p>
                                      </div>
                                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                        <time dateTime="2020-10-04">Oct 4</time>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-4 sm:px-6">
                        <div className="text-sm">
                          <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            {" "}
                            View target in detail
                            <span className="sr-only">
                              {" "}
                              Total Subscribers stats
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
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
                              d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                            />
                          </svg>
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Avg. Open Rate
                          </dt>
                          <dd className="flex items-baseline">
                            <div className="text-2xl font-semibold text-gray-900">
                              58.16%
                            </div>

                            <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                              <svg
                                className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="sr-only">Increased by</span>
                              5.4%
                            </div>
                          </dd>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white overflow-hidden border-t border-gray-100">
                      <div className="px-4 pt-5 sm:px-6 sm:pt-6">
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Progress
                        </dt>
                      </div>
                      <div className="px-4 py-5 sm:p-6">
                        <div className="flex items-center">
                          <div className="flow-root">
                            <ul className="-mb-8">
                              <li>
                                <div className="relative pb-8">
                                  <span
                                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                    aria-hidden="true"
                                  ></span>
                                  <div className="relative flex space-x-3">
                                    <div>
                                      <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white"></span>
                                    </div>
                                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                      <div>
                                        <p className="text-sm text-gray-500">
                                          Applied to{" "}
                                          <a
                                            href="#"
                                            className="font-medium text-gray-900"
                                          >
                                            Front End Developer
                                          </a>
                                        </p>
                                      </div>
                                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                        <time dateTime="2020-09-20">
                                          Sep 20
                                        </time>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div className="relative pb-8">
                                  <span
                                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                    aria-hidden="true"
                                  ></span>
                                  <div className="relative flex space-x-3">
                                    <div>
                                      <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white"></span>
                                    </div>
                                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                      <div>
                                        <p className="text-sm text-gray-500">
                                          Advanced to phone screening by{" "}
                                          <a
                                            href="#"
                                            className="font-medium text-gray-900"
                                          >
                                            Bethany Blake
                                          </a>
                                        </p>
                                      </div>
                                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                        <time dateTime="2020-09-22">
                                          Sep 22
                                        </time>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div className="relative pb-8">
                                  <span
                                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                    aria-hidden="true"
                                  ></span>
                                  <div className="relative flex space-x-3">
                                    <div>
                                      <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                                        <svg
                                          className="h-5 w-5 text-white"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      </span>
                                    </div>
                                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                      <div>
                                        <p className="text-sm text-gray-500">
                                          Completed phone screening with{" "}
                                          <a
                                            href="#"
                                            className="font-medium text-gray-900"
                                          >
                                            Martha Gardner
                                          </a>
                                        </p>
                                      </div>
                                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                        <time dateTime="2020-09-28">
                                          Sep 28
                                        </time>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div className="relative pb-8">
                                  <span
                                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                    aria-hidden="true"
                                  ></span>
                                  <div className="relative flex space-x-3">
                                    <div>
                                      <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white"></span>
                                    </div>
                                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                      <div>
                                        <p className="text-sm text-gray-500">
                                          Advanced to interview by{" "}
                                          <a
                                            href="#"
                                            className="font-medium text-gray-900"
                                          >
                                            Bethany Blake
                                          </a>
                                        </p>
                                      </div>
                                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                        <time dateTime="2020-09-30">
                                          Sep 30
                                        </time>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div className="relative pb-8">
                                  <div className="relative flex space-x-3">
                                    <div>
                                      <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                                        <svg
                                          className="h-5 w-5 text-white"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      </span>
                                    </div>
                                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                      <div>
                                        <p className="text-sm text-gray-500">
                                          Completed interview with{" "}
                                          <a
                                            href="#"
                                            className="font-medium text-gray-900"
                                          >
                                            Katherine Snyder
                                          </a>
                                        </p>
                                      </div>
                                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                        <time dateTime="2020-10-04">Oct 4</time>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-4 sm:px-6">
                        <div className="text-sm">
                          <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            {" "}
                            View target in detail
                            <span className="sr-only">
                              {" "}
                              Total Subscribers stats
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
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
                              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                            />
                          </svg>
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Avg. Click Rate
                          </dt>
                          <dd className="flex items-baseline">
                            <div className="text-2xl font-semibold text-gray-900">
                              24.57%
                            </div>

                            <div className="ml-2 flex items-baseline text-sm font-semibold text-red-600">
                              <svg
                                className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="sr-only">Decreased by</span>
                              3.2%
                            </div>
                          </dd>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white overflow-hidden border-t border-gray-100">
                      <div className="px-4 pt-5 sm:px-6 sm:pt-6">
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Progress
                        </dt>
                      </div>
                      <div className="px-4 py-5 sm:p-6">
                        <div className="flex items-center">
                          <div className="flow-root">
                            <ul className="-mb-8">
                              <li>
                                <div className="relative pb-8">
                                  <span
                                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                    aria-hidden="true"
                                  ></span>
                                  <div className="relative flex space-x-3">
                                    <div>
                                      <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white"></span>
                                    </div>
                                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                      <div>
                                        <p className="text-sm text-gray-500">
                                          Applied to{" "}
                                          <a
                                            href="#"
                                            className="font-medium text-gray-900"
                                          >
                                            Front End Developer
                                          </a>
                                        </p>
                                      </div>
                                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                        <time dateTime="2020-09-20">
                                          Sep 20
                                        </time>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div className="relative pb-8">
                                  <span
                                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                    aria-hidden="true"
                                  ></span>
                                  <div className="relative flex space-x-3">
                                    <div>
                                      <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white"></span>
                                    </div>
                                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                      <div>
                                        <p className="text-sm text-gray-500">
                                          Advanced to phone screening by{" "}
                                          <a
                                            href="#"
                                            className="font-medium text-gray-900"
                                          >
                                            Bethany Blake
                                          </a>
                                        </p>
                                      </div>
                                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                        <time dateTime="2020-09-22">
                                          Sep 22
                                        </time>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div className="relative pb-8">
                                  <span
                                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                    aria-hidden="true"
                                  ></span>
                                  <div className="relative flex space-x-3">
                                    <div>
                                      <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                                        <svg
                                          className="h-5 w-5 text-white"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      </span>
                                    </div>
                                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                      <div>
                                        <p className="text-sm text-gray-500">
                                          Completed phone screening with{" "}
                                          <a
                                            href="#"
                                            className="font-medium text-gray-900"
                                          >
                                            Martha Gardner
                                          </a>
                                        </p>
                                      </div>
                                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                        <time dateTime="2020-09-28">
                                          Sep 28
                                        </time>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div className="relative pb-8">
                                  <span
                                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                    aria-hidden="true"
                                  ></span>
                                  <div className="relative flex space-x-3">
                                    <div>
                                      <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white"></span>
                                    </div>
                                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                      <div>
                                        <p className="text-sm text-gray-500">
                                          Advanced to interview by{" "}
                                          <a
                                            href="#"
                                            className="font-medium text-gray-900"
                                          >
                                            Bethany Blake
                                          </a>
                                        </p>
                                      </div>
                                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                        <time dateTime="2020-09-30">
                                          Sep 30
                                        </time>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div className="relative pb-8">
                                  <div className="relative flex space-x-3">
                                    <div>
                                      <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                                        <svg
                                          className="h-5 w-5 text-white"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      </span>
                                    </div>
                                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                      <div>
                                        <p className="text-sm text-gray-500">
                                          Completed interview with{" "}
                                          <a
                                            href="#"
                                            className="font-medium text-gray-900"
                                          >
                                            Katherine Snyder
                                          </a>
                                        </p>
                                      </div>
                                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                        <time dateTime="2020-10-04">Oct 4</time>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-4 sm:px-6">
                      <div className="text-sm">
                        <a
                          href="#"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          {" "}
                          View target in detail
                          <span className="sr-only">
                            {" "}
                            Total Subscribers stats
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Targets;
