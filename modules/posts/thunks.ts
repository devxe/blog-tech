import { PostsAction } from "./types";
import { RootState } from "./../index";
import { ThunkAction } from "redux-thunk";
import { getPostsAsyc } from "./actions";
import getPosts from "../../api/posts";

export const getPostsThunk = (): ThunkAction<
  void,
  RootState,
  null,
  PostsAction
> => {
  return async (dispatch) => {
    const { request, success, failure } = getPostsAsyc;
    dispatch(request());
    try {
      const posts = await getPosts();
      dispatch(success(posts));
    } catch (e) {
      dispatch(failure(e));
    }
  };
};
