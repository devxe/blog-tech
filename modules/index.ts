import { combineReducers } from "redux";
import app from "./app";
import posts from "./posts/reducer";

const rootReducer = combineReducers({
  app,
  posts,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
