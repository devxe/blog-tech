import { AxiosError } from "axios";
export const GET_USER_POSTS_REQUEST = "user/GET_USER_POSTS_REQUEST" as const;
export const GET_USER_POSTS_SUCCESS = "user/GET_USER_POSTS_SUCCESS" as const;
export const GET_USER_POSTS_FAILURE = "user/GET_USER_POSTS_FAILURE" as const;

export type Post = {
  id: number;
  title: string;
  subtitle: string;
  date: string;
};

export type Posts = Post[];

export type UserPostsState = {
  loading: boolean;
  error: AxiosError | null;
  data: Posts | null;
};
