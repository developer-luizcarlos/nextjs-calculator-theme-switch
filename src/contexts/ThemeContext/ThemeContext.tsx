"use client";
// Hooks importation
import { createContext, useState } from "react";

// Types importation
import { ITheme } from "@/types/Theme/Theme";
import { IThemeContext } from "@/types/ThemeContext/ThemeContextType";

export const ThemeContextProvider = createContext<IThemeContext | null>(null);

const ThemeContext = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ITheme>("light");

  const toggleTheme = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));

  return (
    <ThemeContextProvider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContextProvider>
  );
};

export default ThemeContext;
