import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

const PostDetail: NextPage = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <button className="flex felx-row items-center" onClick={handleBack}>
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
      </button>

      <span></span>
    </>
  );
};

export default PostDetail;
