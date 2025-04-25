"use client";
// Stylesheet importation
import "./page.css";

// Components importation
import Calculator from "@/components/Calculator/Calculator";

// Hooks importation
import { useContext } from "react";

// Theme context importation
import { ThemeContextObject } from "@/contexts/ThemeContext";

export default function Home() {
  const { theme } = useContext(ThemeContextObject)!;

  return (
    <div>
      <Calculator />
    </div>
  );
}
