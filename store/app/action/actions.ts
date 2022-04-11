import { DARK_MODE } from "../types/types";

export const toggleDarkMode = () => ({
  type: DARK_MODE,
});

export type appActionRequest = ReturnType<typeof toggleDarkMode>;
