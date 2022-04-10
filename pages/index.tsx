import type { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../components/Post";
import { RootState } from "../modules";
import { getPostsThunk } from "../modules/posts/thunks";

const Home: NextPage = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.posts.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsThunk());
  }, []);

  return (
    <>
      <span className="text-lg font-semibold">최신 글</span>
      <div className="pt-6 space-y-6">
        {data?.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            subtitle={post.subtitle}
            date={post.date}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
