const DARK_MODE = "evironment/DARK_MODE" as const;

export const setDarkMode = () => ({ type: DARK_MODE });

export type AppAction = ReturnType<typeof setDarkMode>;
export type AppState = {
  darkMode: boolean;
};

const initialState: AppState = {
  darkMode: false,
};

const app = (state: AppState = initialState, action: AppAction) => {
  switch (action.type) {
    case DARK_MODE:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

export default app;
