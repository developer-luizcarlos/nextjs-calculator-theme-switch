"use client";
// Hooks importation
import { createContext, useState } from "react";

// Types importation
import { ITheme } from "@/types/Theme/Theme";
import { IThemeContext } from "@/types/ThemeContext/ThemeContextType";

export const ThemeContextObject = createContext<IThemeContext | null>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ITheme>("light");

  const toggleTheme = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));

  return (
    <ThemeContextObject.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContextObject.Provider>
  );
};

export default ThemeProvider;
