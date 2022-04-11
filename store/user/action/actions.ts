import { AxiosError } from "axios";
import {
  GET_USER_POSTS_FAILURE,
  GET_USER_POSTS_REQUEST,
  GET_USER_POSTS_SUCCESS,
  Posts,
} from "./../constants/types";

const getUserPostsRequest = () => ({
  type: GET_USER_POSTS_REQUEST,
});

const getUserPostsSuccess = (data: Posts) => ({
  type: GET_USER_POSTS_SUCCESS,
  payload: {
    data,
  },
});

const getUserPostsFailure = (error: AxiosError) => ({
  type: GET_USER_POSTS_FAILURE,
  payload: {
    error,
  },
});

export type UserAction =
  | ReturnType<typeof getUserPostsRequest>
  | ReturnType<typeof getUserPostsSuccess>
  | ReturnType<typeof getUserPostsFailure>;

const userActions = {
  getUserPostsRequest,
  getUserPostsSuccess,
  getUserPostsFailure,
};

export default userActions;
