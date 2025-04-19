import { useState } from "react";

export const useCalculator = () => {
  const [screenValue, setScreenValue] = useState("0");

  const isLastCharANumber = (): boolean => {
    const lastChar: string | undefined = screenValue.at(-1);
    if (lastChar === "" || lastChar === undefined) return false;

    const lastCharToNumber = parseFloat(lastChar);
    return !isNaN(lastCharToNumber);
  };

  const insertNumberToScreenCalc = (value: string): void =>
    setScreenValue((previousValue) => {
      return previousValue === "0" ? value : previousValue.concat(value);
    });

  const insertMathCharToScreenCalc = (character: string) => {
    const isLastCharNum: boolean = isLastCharANumber();

    if (!isLastCharNum) return;

    setScreenValue((previousValue) => {
      return previousValue.concat(character);
    });
  };

  return { screenValue, insertNumberToScreenCalc, insertMathCharToScreenCalc };
};
