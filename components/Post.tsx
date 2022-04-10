import { NextPage } from "next";

const Post: NextPage<Post> = ({
  id, //
  title,
  subtitle,
  date,
}) => {
  return (
    <>
      <div className="cursor-pointer text-blue-500 hover:text-blue-400 active:text-blue-600">
        <span className="text-lg font-semibold">{title}</span>
        <div className="text-xs flex flex-row items-center space-x-1 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>March 27, 2022</span>
        </div>
        <div className="text-sm text-slate-800">{subtitle}</div>
      </div>
    </>
  );
};

export default Post;
