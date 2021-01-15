import Head from "next/head";
import Sidebar from "../../components/Sidebar";
import Toolbar from "../../components/Toolbar";

const Home = (): JSX.Element => {
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
      <div className="h-screen flex overflow-hidden bg-white">
        <Sidebar activePage={"Tasks"} />
        <main
          className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
          tabIndex={0}
        >
          <Toolbar name={"Tasks"} />
          <div className="sm:hidden">
            <div className="px-4 sm:px-6">
              <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                Tasks
              </h2>
            </div>
            <ul className="mt-3 border-t border-gray-200 divide-y divide-gray-100">
              <li>
                <a
                  href="#"
                  className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"
                >
                  <span className="flex items-center truncate space-x-3">
                    <span
                      className="w-6 h-6 flex-shrink-0 rounded-full bg-blue-500"
                      aria-hidden="true"
                    ></span>
                    <span className="font-medium truncate text-sm leading-6">
                      Translate app
                      <span className="truncate font-normal text-gray-500">
                        {" in Get more new users"}
                      </span>
                    </span>
                  </span>
                  <svg
                    className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
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

          <div className="hidden sm:block">
            <div className="align-middle inline-block min-w-full border-b border-gray-200">
              <table className="min-w-full">
                <thead>
                  <tr className="border-t border-gray-200">
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <span className="lg:pl-2">Axel&apos;s Tasks</span>
                    </th>
                    <th className="px-16 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Target
                    </th>
                    <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last updated
                    </th>
                    <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  <tr>
                    <td className="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
                      <div className="flex items-center space-x-3 lg:pl-2">
                        <div
                          className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500"
                          aria-hidden="true"
                        ></div>
                        <a
                          href="/tasks/1"
                          className="truncate hover:text-gray-600"
                        >
                          <span>
                            Translate app
                            <span className="text-gray-500 font-normal">
                              {" in Get more new users"}
                            </span>
                          </span>
                        </a>
                      </div>
                    </td>
                    <td className="hidden md:table-cell px-16 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
                      Total subscribers
                    </td>
                    <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
                      March 17, 2020
                    </td>
                    <td className="pr-6">
                      <div className="relative flex justify-end items-center">
                        <button
                          id="project-options-menu-0"
                          aria-haspopup="true"
                          type="button"
                          className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                          <span className="sr-only">Open options</span>
                          <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
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
  );
};

export default Home;
