import { ITheme } from "../Theme/Theme";

export type IThemeContext = {
  theme: ITheme;
  toggleTheme: () => void;
};
