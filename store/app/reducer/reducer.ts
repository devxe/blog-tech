import { AppAction } from "./../action/actions";
import { AppState, DARK_MODE } from "./../constants/types";
export const initialState: AppState = {
  darkMode: false,
};

export const app = (state: AppState = initialState, action: AppAction) => {
  switch (action.type) {
    case DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};
