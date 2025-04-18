"use client";
// Hooks importation
import { createContext, useState } from "react";

// Types importation
import { ITheme } from "@/types/Theme/index";
import { IThemeContext } from "@/types/Theme/index";

export const ThemeContextObject = createContext<IThemeContext | null>(null);

const ThemeContext = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ITheme>("light");

  const toggleTheme = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));

  return (
    <ThemeContextObject.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContextObject.Provider>
  );
};

export default ThemeContext;
