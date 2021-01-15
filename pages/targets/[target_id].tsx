import Head from "next/head";
import Sidebar from "../../components/Sidebar";
import Toolbar from "../../components/Toolbar";

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
            <div className="min-h-screen bg-gray-100">
              <main className="py-10">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
                  <div className="flex items-center space-x-5">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">
                        Get more new users
                      </h1>
                      <p className="text-sm font-medium text-gray-500">
                        {"Created by "}
                        <a href="#" className="text-gray-900">
                          Robin Lundgren
                        </a>
                        {" on "}
                        on <time dateTime="2020-08-25">August 25, 2020</time>
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
                    >
                      Mark as complete
                    </button>
                  </div>
                </div>

                <div className="mt-8 max-w-7xl px-6 mx-auto">
                  <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Target Users
                        </dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">
                          100 000
                        </dd>
                      </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Current Users
                        </dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">
                          71 897
                        </dd>
                      </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Change since target creation
                        </dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">
                          1 243
                        </dd>
                      </div>
                    </div>
                  </dl>
                </div>

                <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
                  <div className="space-y-6 lg:col-start-1 lg:col-span-2">
                    <section aria-labelledby="applicant-information-title">
                      <div className="bg-white shadow sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6">
                          <h2
                            id="applicant-information-title"
                            className="text-lg leading-6 font-medium text-gray-900"
                          >
                            Target Information
                          </h2>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                              <dt className="text-sm font-medium text-gray-500">
                                About
                              </dt>
                              <dd className="mt-1 text-sm text-gray-900">
                                Fugiat ipsum ipsum deserunt culpa aute sint do
                                nostrud anim incididunt cillum culpa consequat.
                                Excepteur qui ipsum aliquip consequat sint. Sit
                                id mollit nulla mollit nostrud in ea officia
                                proident. Irure nostrud pariatur mollit ad
                                adipisicing reprehenderit deserunt qui eu.
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </div>
                    </section>

                    <section aria-labelledby="notes-title">
                      <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden">
                        <div className="divide-y divide-gray-200">
                          <div className="px-4 py-5 sm:px-6">
                            <h2
                              id="notes-title"
                              className="text-lg font-medium text-gray-900"
                            >
                              Comments
                            </h2>
                          </div>
                          <div className="px-4 py-6 sm:px-6">
                            <ul className="space-y-8">
                              <li>
                                <div className="flex space-x-3">
                                  <div className="flex-shrink-0">
                                    <img
                                      className="h-10 w-10 rounded-full"
                                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                      alt=""
                                    />
                                  </div>
                                  <div>
                                    <div className="text-sm">
                                      <a
                                        href="#"
                                        className="font-medium text-gray-900"
                                      >
                                        Leslie Alexander
                                      </a>
                                    </div>
                                    <div className="mt-1 text-sm text-gray-700">
                                      <p>
                                        Ducimus quas delectus ad maxime totam
                                        doloribus reiciendis ex. Tempore dolorem
                                        maiores. Similique voluptatibus tempore
                                        non ut.
                                      </p>
                                    </div>
                                    <div className="mt-2 text-sm space-x-2">
                                      <span className="text-gray-500 font-medium">
                                        4d ago
                                      </span>
                                      <span className="text-gray-500 font-medium">
                                        &middot;
                                      </span>
                                      <button
                                        type="button"
                                        className="text-gray-900 font-medium"
                                      >
                                        Reply
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div className="flex space-x-3">
                                  <div className="flex-shrink-0">
                                    <img
                                      className="h-10 w-10 rounded-full"
                                      src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                      alt=""
                                    />
                                  </div>
                                  <div>
                                    <div className="text-sm">
                                      <a
                                        href="#"
                                        className="font-medium text-gray-900"
                                      >
                                        Michael Foster
                                      </a>
                                    </div>
                                    <div className="mt-1 text-sm text-gray-700">
                                      <p>
                                        Et ut autem. Voluptatem eum dolores sint
                                        necessitatibus quos. Quis eum qui
                                        dolorem accusantium voluptas voluptatem
                                        ipsum. Quo facere iusto quia accusamus
                                        veniam id explicabo et aut.
                                      </p>
                                    </div>
                                    <div className="mt-2 text-sm space-x-2">
                                      <span className="text-gray-500 font-medium">
                                        4d ago
                                      </span>
                                      <span className="text-gray-500 font-medium">
                                        &middot;
                                      </span>
                                      <button
                                        type="button"
                                        className="text-gray-900 font-medium"
                                      >
                                        Reply
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div className="flex space-x-3">
                                  <div className="flex-shrink-0">
                                    <img
                                      className="h-10 w-10 rounded-full"
                                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                      alt=""
                                    />
                                  </div>
                                  <div>
                                    <div className="text-sm">
                                      <a
                                        href="#"
                                        className="font-medium text-gray-900"
                                      >
                                        Dries Vincent
                                      </a>
                                    </div>
                                    <div className="mt-1 text-sm text-gray-700">
                                      <p>
                                        Expedita consequatur sit ea voluptas quo
                                        ipsam recusandae. Ab sint et voluptatem
                                        repudiandae voluptatem et eveniet. Nihil
                                        quas consequatur autem. Perferendis
                                        rerum et.
                                      </p>
                                    </div>
                                    <div className="mt-2 text-sm space-x-2">
                                      <span className="text-gray-500 font-medium">
                                        4d ago
                                      </span>
                                      <span className="text-gray-500 font-medium">
                                        &middot;
                                      </span>
                                      <button
                                        type="button"
                                        className="text-gray-900 font-medium"
                                      >
                                        Reply
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-6 sm:px-6">
                          <div className="flex space-x-3">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                                alt=""
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <form action="#">
                                <div>
                                  <label htmlFor="comment" className="sr-only">
                                    About
                                  </label>
                                  <textarea
                                    id="comment"
                                    name="comment"
                                    rows={3}
                                    className="shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                                    placeholder="Add a note"
                                  ></textarea>
                                </div>
                                <div className="mt-3 flex items-center justify-between">
                                  <a
                                    href="#"
                                    className="group inline-flex items-start text-sm space-x-2 text-gray-500 hover:text-gray-900"
                                  ></a>
                                  <button
                                    type="submit"
                                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                  >
                                    Comment
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>

                  <section
                    aria-labelledby="timeline-title"
                    className="lg:col-start-3 lg:col-span-1"
                  >
                    <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                      <h2
                        id="timeline-title"
                        className="text-lg font-medium text-gray-900"
                      >
                        Timeline
                      </h2>

                      <div className="mt-6 flow-root">
                        <ul className="-mb-8">
                          <li>
                            <div className="relative pb-8">
                              <span
                                className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                aria-hidden="true"
                              ></span>
                              <div className="relative flex space-x-3">
                                <div>
                                  <span className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
                                    <svg
                                      className="h-5 w-5 text-white"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </span>
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
                                    <time dateTime="2020-09-20">Sep 20</time>
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
                                  <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                                    <svg
                                      className="h-5 w-5 text-white"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                    </svg>
                                  </span>
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
                                    <time dateTime="2020-09-22">Sep 22</time>
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
                                    <time dateTime="2020-09-28">Sep 28</time>
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
                                  <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                                    <svg
                                      className="h-5 w-5 text-white"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                    </svg>
                                  </span>
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
                                    <time dateTime="2020-09-30">Sep 30</time>
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
                  </section>
                </div>
              </main>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Targets;
