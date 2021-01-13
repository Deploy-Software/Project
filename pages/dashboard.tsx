import Head from "next/head";
import Toolbar from "../components/Toolbar";
import Sidebar from "../components/Sidebar";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  UsersIcon,
  MailIcon,
  ClickIcon,
} from "../components/Icon";
import { PropsWithChildren } from "react";

interface StatisticCardProps {
  title: string;
  number: string;
  change: string;
  icon: JSX.Element;
  positive: boolean;
}

const StatisticCard = ({
  title,
  number,
  change,
  icon,
  positive,
}: StatisticCardProps): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
            {icon}
          </div>
          <div className="ml-5 w-0 flex-1">
            <dt className="text-sm font-medium text-gray-500 truncate">
              {title}
            </dt>
            <dd className="flex items-baseline">
              <div className="text-2xl font-semibold text-gray-900">
                {number}
              </div>

              <div
                className={`ml-2 flex items-baseline text-sm font-semibold ${
                  positive ? "text-green-600" : "text-red-600"
                }`}
              >
                {positive ? (
                  <ArrowUpIcon className="self-center flex-shrink-0 h-5 w-5 text-green-500" />
                ) : (
                  <ArrowDownIcon className="self-center flex-shrink-0 h-5 w-5 text-red-500" />
                )}
                <span className="sr-only">
                  {positive ? "Increased by" : "Decreased by"}
                </span>
                {change}
              </div>
            </dd>
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
            View target
            <span className="sr-only"> {title}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

interface ListCardProps {
  title: string;
}

const ListCard = ({
  title,
  children,
}: PropsWithChildren<ListCardProps>): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 pt-5 sm:px-6 sm:pt-6">
        <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center">
          <div className="flow-root">
            <ul className="-mb-8">{children}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

type TaskStatus = "Finished" | "In Progress";

interface TaskListCardProps {
  action: string;
  target: string;
  status: TaskStatus;
  date: string;
}

const TaskListCard = ({
  action,
  target,
  status,
  date,
}: TaskListCardProps): JSX.Element => {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex space-x-3">
          {status === "In Progress" && (
            <div>
              <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white"></span>
            </div>
          )}
          {status === "Finished" && (
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
          )}
          <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
            <div>
              <p className="text-sm text-gray-500">
                {action}{" "}
                <a href="#" className="font-medium text-gray-900">
                  {target}
                </a>
              </p>
            </div>
            <div className="text-right text-sm whitespace-nowrap text-gray-500">
              <time dateTime="2020-09-20">{date}</time>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

interface FeedListCardProps {
  action: string;
  target: string;
  image: string;
  date: string;
}

const FeedListCard = ({
  action,
  target,
  image,
  date,
}: FeedListCardProps): JSX.Element => {
  return (
    <li>
      <div className="relative pb-8">
        <span
          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div className="relative flex space-x-3">
          <div>
            <img
              className="inline-block h-8 w-8 rounded-full"
              src={image}
              alt=""
            />
          </div>
          <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
            <div>
              <p className="text-sm text-gray-500">
                {action}{" "}
                <a href="#" className="font-medium text-gray-900">
                  {target}
                </a>
              </p>
            </div>
            <div className="text-right text-sm whitespace-nowrap text-gray-500">
              <time dateTime="2020-09-20">{date}</time>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

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
      <div>
        <div className="h-screen flex overflow-hidden bg-white">
          <Sidebar activePage={"Home"} />
          <main
            className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
            tabIndex={0}
          >
            <Toolbar name={"Home"} />
            <div className="hidden mt-8 mx-8 sm:block">
              <div>
                <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                  Targets
                </h2>
                <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  <StatisticCard
                    title={"Total Subscribers"}
                    number={"71,897"}
                    change={"122"}
                    positive={true}
                    icon={<UsersIcon className={"h-6 w-6 text-white"} />}
                  />

                  <StatisticCard
                    title={"Avg. Open Rate"}
                    number={"58.16%"}
                    change={"5.4%"}
                    positive={true}
                    icon={<MailIcon className="h-6 w-6 text-white" />}
                  />

                  <StatisticCard
                    title={"Avg. Click Rate"}
                    number={"24.57%"}
                    change={"3.2%"}
                    positive={false}
                    icon={<ClickIcon className="h-6 w-6 text-white" />}
                  />
                </dl>
              </div>
              <div className="mt-4">
                <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                  Work
                </h2>
                <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  <ListCard title={"Tasks"}>
                    <TaskListCard
                      action={"Applied to"}
                      target={"Front End Developer"}
                      date={"Sep 20"}
                      status={"In Progress"}
                    />
                    <TaskListCard
                      action={"Advanced to phone screening by"}
                      target={"Bethany Blake"}
                      date={"Sep 22"}
                      status={"Finished"}
                    />
                    <TaskListCard
                      action={"Completed phone screening with"}
                      target={"Martha Gardner"}
                      date={"Sep 28"}
                      status={"Finished"}
                    />
                    <TaskListCard
                      action={"Advanced to interview by"}
                      target={"Bethany Blake"}
                      date={"Sep 30"}
                      status={"In Progress"}
                    />
                    <TaskListCard
                      action={"Completed interview with"}
                      target={"Katherine Snyder"}
                      date={"Oct 4"}
                      status={"Finished"}
                    />
                  </ListCard>

                  <ListCard title={"Feed"}>
                    <FeedListCard
                      action={"Applied to"}
                      target={"Front End Developer"}
                      date={"Sep 20"}
                      image={
                        "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      }
                    />
                    <FeedListCard
                      action={"Advanced to phone screening by"}
                      target={"Bethany Blake"}
                      date={"Sep 22"}
                      image={
                        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      }
                    />
                    <FeedListCard
                      action={"Completed phone screening with"}
                      target={"Martha Gardner"}
                      date={"Sep 28"}
                      image={
                        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                      }
                    />
                    <FeedListCard
                      action={"Advanced to interview by"}
                      target={"Bethany Blake"}
                      date={"Sep 30"}
                      image={
                        "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      }
                    />
                    <FeedListCard
                      action={"Completed interview with"}
                      target={"Katherine Snyder"}
                      date={"Oct 4"}
                      image={
                        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      }
                    />
                  </ListCard>
                  <ListCard title={"Activity"}>
                    <TaskListCard
                      action={"Applied to"}
                      target={"Front End Developer"}
                      date={"Sep 20"}
                      status={"In Progress"}
                    />
                    <TaskListCard
                      action={"Advanced to phone screening by"}
                      target={"Bethany Blake"}
                      date={"Sep 22"}
                      status={"Finished"}
                    />
                    <TaskListCard
                      action={"Completed phone screening with"}
                      target={"Martha Gardner"}
                      date={"Sep 28"}
                      status={"Finished"}
                    />
                    <TaskListCard
                      action={"Advanced to interview by"}
                      target={"Bethany Blake"}
                      date={"Sep 30"}
                      status={"In Progress"}
                    />
                    <TaskListCard
                      action={"Completed interview with"}
                      target={"Katherine Snyder"}
                      date={"Oct 4"}
                      status={"Finished"}
                    />
                  </ListCard>
                </dl>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
