import { NextPage } from "next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import PostDetail from "../../components/PostDetail";
import { RootState } from "../../store";

const PostDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const postId = Number(id);
  const { data } = useSelector((state: RootState) => state.user);
  const post = data?.filter((post) => post.id === postId)[0];

  return (
    <>
      <PostDetail />
      <h1>Post Detail {id}</h1>
    </>
  );
};

export default PostDetailPage;
