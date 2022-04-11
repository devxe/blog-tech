import userActions from "../action/actions";
import { GET_USER_POSTS_REQUEST, Posts } from "../constants/types";

import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

const getUserPostsAPI = async () => {
  const response = await axios.get("/api/posts");
  return response.data;
};

export function* getUserPostsSaga() {
  try {
    const result: Posts = yield call(getUserPostsAPI);
    yield put(userActions.getUserPostsSuccess(result));
  } catch (err) {
    console.log(err);
    if (axios.isAxiosError(err)) {
      yield put(userActions.getUserPostsFailure(err));
    }
  }
}

export function* watchGetUserPosts() {
  yield takeLatest(GET_USER_POSTS_REQUEST, getUserPostsSaga);
}
