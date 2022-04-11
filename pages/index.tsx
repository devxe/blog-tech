import type { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../components/Post";
import { RootState } from "../store";
import userActions from "../store/user/action/actions";

const Home: NextPage = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getUserPostsRequest());
  }, [dispatch]);

  return (
    <>
      {loading && <p style={{ textAlign: "center" }}>로딩중..</p>}
      {error && <p style={{ textAlign: "center" }}>에러 발생!</p>}
      {data && (
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
      )}
    </>
  );
};

export default Home;
