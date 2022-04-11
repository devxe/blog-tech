import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { monthDayYear } from "../lib/utils";
import { RootState } from "../store";
import MarkdownRenderer from "./MarkdownRenderer";

const PostDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const postId = Number(id);
  const { data } = useSelector((state: RootState) => state.user);
  const post = data?.filter((post) => post.id === postId)[0];
  const { title, date } = post || {
    title: "",
    date: "",
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <span className="text-2xl font-bold">{title}</span>
      <div className="text-xs flex flex-row items-center space-x-1 text-gray-400 mt-4">
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
        <span>{monthDayYear(date)}</span>
      </div>

      <MarkdownRenderer />
      {/* <button className="flex felx-row items-center" onClick={handleBack}>
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span className="text-sm">목록으로 가기</span>
      </button> */}
    </>
  );
};

export default PostDetail;
