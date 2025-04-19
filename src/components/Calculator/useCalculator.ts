import { useState } from "react";

export const useCalculator = () => {
  const [screenValue, setScreenValue] = useState("0");

  return { screenValue, setScreenValue };
};
