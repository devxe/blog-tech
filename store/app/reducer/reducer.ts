import { appActionRequest } from "./../action/actions";
import { appProps, DARK_MODE } from "./../types/types";

export const initialState: appProps = {
  darkMode: false,
};

export const app = (
  state: appProps = initialState,
  action: appActionRequest
) => {
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
