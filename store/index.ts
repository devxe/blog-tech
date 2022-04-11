import { user } from "./user/reducer/reducer";
import { app } from "./app/reducer/reducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["app", "user"],
  // blacklist -> 그것만 제외합니다
};

const rootReducer = combineReducers({
  app,
  user,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
