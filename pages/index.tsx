import type { NextPage } from "next";
import Post from "../components/Post";

const Home: NextPage = () => {
  return (
    <>
      <div className="px-8">
        <div className="py-4 pb-7">
          <span className="text-lg font-semibold">최신 글</span>
        </div>
        <div className="space-y-6">
          {[...Array(5)].map((_, i) => (
            <Post key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
