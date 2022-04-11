import { user } from "./user/reducer/reducer";
import { app } from "./app/reducer/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  app,
  user,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
