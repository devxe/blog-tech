import { PostsState, PostsAction } from "./types";
import { createReducer } from "typesafe-actions";
import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_ERROR } from "./actions";

const initialState: PostsState = {
  posts: {
    loading: false,
    error: null,
    data: null,
  },
};

const posts = createReducer<PostsState, PostsAction>(initialState, {
  [GET_POSTS]: (state) => ({
    ...state,
    posts: {
      ...initialState.posts,
      loading: true,
    },
  }),
  [GET_POSTS_SUCCESS]: (state, action) => ({
    ...state,
    posts: {
      ...initialState.posts,
      data: action.payload,
    },
  }),
  [GET_POSTS_ERROR]: (state, action) => ({
    ...state,
    posts: {
      ...initialState.posts,
      error: action.payload,
    },
  }),
});

export default posts;
