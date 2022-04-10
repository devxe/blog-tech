import { Posts } from "./types";
import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";

export const GET_POSTS = "posts/GET_POSTS";
export const GET_POSTS_SUCCESS = "posts/GET_POSTS_SUCCESS";
export const GET_POSTS_ERROR = "posts/GET_POSTS_ERROR";

export const getPostsAsyc = createAsyncAction(
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR
)<void, Posts, AxiosError>();
