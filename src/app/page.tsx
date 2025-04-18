"use client";
// Stylesheet importation
import "./page.css";

// Components importation
import Calculator from "@/components/Calculator/Calculator";

// Hooks importation
import { useContext } from "react";

// Theme context importation
import { ThemeContextObject } from "@/contexts/ThemeContext";

const Page: React.FC = () => {
  const { theme } = useContext(ThemeContextObject)!;

  return (
    <div className={theme === "light" ? "page light-theme" : "page dark-theme"}>
      <Calculator />
    </div>
  );
};

export default Page;
