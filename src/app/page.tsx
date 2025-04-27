"use client";
// Stylesheet importation
import "./page.css";

// Components importation
import Calculator from "@/components/Calculator/Calculator";

export default function Home() {
  return (
    <div className="page">
      <Calculator />
    </div>
  );
}
