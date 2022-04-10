import type { NextPage } from "next";
import Post from "../components/Post";

const Home: NextPage = () => {
  return (
    <>
      <span className="text-lg font-semibold">최신 글</span>
      <div className="pt-6 space-y-6">
        {[...Array(5)].map((_, i) => (
          <Post key={i} />
        ))}
      </div>
    </>
  );
};

export default Home;
