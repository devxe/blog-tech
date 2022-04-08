import { NextPage } from "next";
import { useDispatch } from "react-redux";
import { setDarkMode } from "../modules/app";

const Navigation: NextPage = () => {
  const dispatch = useDispatch();
  const handleDarkMode = () => {
    dispatch(setDarkMode());
  };

  return (
    <>
      <nav className="flex flex-row h-20 items-center p-8 justify-between font-bold text-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-300">
        <div className="flex flex-row items-baseline space-x-2">
          <div>로이</div>
          <div className="text-sm text-gray-400">Devlog</div>
        </div>
        <div className="flex flex-row space-x-4">
          <button onClick={handleDarkMode}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
