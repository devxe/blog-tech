import { fork } from "redux-saga/effects";
import { all } from "redux-saga/effects";
import { watchGetUserPosts } from "./userPosts";

export default function* rootSaga() {
  yield all([
    fork(watchGetUserPosts), //
  ]);
}
