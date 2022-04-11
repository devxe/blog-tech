import { DARK_MODE } from "../constants/types";

export const toggleDarkMode = () => ({
  type: DARK_MODE,
});

export type AppAction = ReturnType<typeof toggleDarkMode>;
