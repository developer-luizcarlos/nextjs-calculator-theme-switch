"use client";

// Stylesheet importation
import "./ThemeSwitcher.css";

// Hooks importation
import { useContext } from "react";

// Theme context importation
import { ThemeContextObject } from "@/contexts/ThemeContext";

// icons importation
import { IoSunnyOutline } from "react-icons/io5";
import { PiMoonLight } from "react-icons/pi";

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContextObject)!;

  return (
    <div className="theme-switcher">
      <IoSunnyOutline
        className={
          theme === "light"
            ? "theme-switcher__icon theme-switcher__icon--active"
            : "theme-switcher__icon"
        }
        onClick={toggleTheme}
      />
      <PiMoonLight
        className={
          theme === "dark"
            ? "theme-switcher__icon theme-switcher__icon--active"
            : "theme-switcher__icon"
        }
        onClick={toggleTheme}
      />
    </div>
  );
};

export default ThemeSwitcher;
