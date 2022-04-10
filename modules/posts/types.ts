import * as actions from "./actions";
import { ActionType } from "typesafe-actions";

export type Post = {
  id: number;
  title: string;
  subtitle: string;
  date: string;
};

export type Posts = Post[];

export type PostsAction = ActionType<typeof actions>;

export type PostsState = {
  posts: {
    loading: boolean;
    error: Error | null;
    data: Posts | null;
  };
};
