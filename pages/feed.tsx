import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Toolbar from "../components/Toolbar";

const SignIn = (): JSX.Element => {
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
      <div className="h-screen bg-white overflow-hidden flex">
        <Sidebar activePage={"Feed"} />
        <div className="flex-1 flex flex-col">
          <main
            className="flex-1 overflow-y-auto focus:outline-none"
            tabIndex={0}
          >
            <Toolbar name={"Feed"} />
            <div className="px-4 sm:px-6 md:px-0">
              <div className="py-6">
                <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 overflow-hidden shadow-md rounded-lg">
                  <img
                    className="w-full h-64 object-cover"
                    src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="Article"
                  />

                  <div className="p-6">
                    <div>
                      <span className="text-blue-600 dark:text-blue-400 text-xs font-medium uppercase">
                        Engineering
                      </span>
                      <a
                        href="#"
                        className="block text-gray-800 dark:text-white font-semibold text-2xl mt-2 hover:text-gray-600 hover:underline"
                      >
                        I Built A Successful Blog In One Year
                      </a>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Molestie parturient et sem ipsum volutpat vel. Natoque
                        sem et aliquam mauris egestas quam volutpat viverra. In
                        pretium nec senectus erat. Et malesuada lobortis.
                      </p>
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <img
                            className="h-10 object-cover rounded-full"
                            src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                            alt="Avatar"
                          />
                          <a
                            href="#"
                            className="mx-2 text-gray-700 dark:text-gray-200 font-semibold"
                          >
                            Jone Doe
                          </a>
                        </div>
                        <span className="mx-1 text-gray-600 dark:text-gray-300 text-xs">
                          21 SEP 2015
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-w-2xl mx-auto py-4 px-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-32">
                  <div className="flex justify-center md:justify-end -mt-16">
                    <img
                      className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500 dark:border-indigo-400"
                      alt="Testimonial avatar"
                      src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                    />
                  </div>

                  <h2 className="text-gray-800 dark:text-white text-2xl mt-2 md:mt-0 md:text-3xl font-semibold">
                    Design Tools
                  </h2>

                  <p className="mt-2 text-gray-600 dark:text-gray-200">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae dolores deserunt ea doloremque natus error, rerum quas
                    odio quaerat nam ex commodi hic, suscipit in a veritatis
                    pariatur minus consequuntur!
                  </p>

                  <div className="flex justify-end mt-4">
                    <a
                      href="#"
                      className="text-xl font-medium text-indigo-500 dark:text-indigo-300"
                    >
                      John Doe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
