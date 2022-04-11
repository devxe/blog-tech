import { app } from "./app/reducer/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  app,
  // posts,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
