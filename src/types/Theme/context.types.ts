import { ITheme } from "./theme.types";

export type IThemeContext = {
  theme: ITheme;
  toggleTheme: () => void;
};
