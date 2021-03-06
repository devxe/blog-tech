import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cls } from "../lib/utils";
import { RootState } from "../store";
import { toggleDarkMode } from "../store/app/action/actions";

const Header: NextPage = () => {
  const router = useRouter();

  const darkMode = useSelector((state: RootState) => state.app.darkMode);
  const dispatch = useDispatch();
  const handleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <>
      <nav className="flex flex-row h-20 items-center p-8 justify-between font-bold text-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-300">
        <Link href={"/"}>
          <div className="flex flex-row items-baseline space-x-2 cursor-pointer">
            <div>로이</div>
            <div className="text-sm text-gray-400">Devlog</div>
          </div>
        </Link>
        <div className="flex flex-row space-x-5 cursor-pointer">
          <Link href={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={cls(
                "h-6 w-6",
                router.pathname !== "/"
                  ? "hover:text-gray-400 active:text-gray-600"
                  : "",
                router.pathname === "/" ? "text-teal-500" : ""
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </Link>
          <Link href={"/archive"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={cls(
                "h-6 w-6",
                router.pathname !== "/archive"
                  ? "hover:text-gray-400 active:text-gray-600"
                  : "",
                router.pathname === "/archive" ? "text-teal-500" : ""
              )}
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
          </Link>
          <Link href={"/about"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={cls(
                "h-6 w-6", //
                router.pathname !== "/about"
                  ? "hover:text-gray-400 active:text-gray-600"
                  : "",
                router.pathname === "/about" ? "text-teal-500" : ""
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Link>
          <button onClick={handleDarkMode}>
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-400 active:text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-400 active:text-gray-600"
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
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
