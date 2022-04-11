import { UserAction } from "./../action/actions";
import {
  GET_USER_POSTS_FAILURE,
  GET_USER_POSTS_REQUEST,
  GET_USER_POSTS_SUCCESS,
  UserPostsState,
} from "./../constants/types";
export const initialState: UserPostsState = {
  loading: false,
  error: null,
  data: null,
};

export const user = (
  state: UserPostsState = initialState,
  action: UserAction
) => {
  switch (action.type) {
    case GET_USER_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    case GET_USER_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case GET_USER_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
