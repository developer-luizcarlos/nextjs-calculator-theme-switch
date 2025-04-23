import {
  displayFormatPossibleFloatResult,
  evaluateExpression,
} from "@/utils/calculator";
import { useState } from "react";

export const useCalculator = () => {
  const [screenValue, setScreenValue] = useState("0");
  const [lastResult, setLastResult] = useState("");

  const clearScreenCalc = () => setScreenValue("0");

  const displayLastResult = (): void => {
    const result = evaluateExpression(screenValue);
    const formatedResult = displayFormatPossibleFloatResult(result);
    const expression: string = `${screenValue} = ${formatedResult}`;
    setLastResult(expression);
  };

  const eraseLastDigitFromScreenCalc = () =>
    setScreenValue(() =>
      screenValue.length === 1 ? "0" : screenValue.slice(0, -1)
    );

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

  const evaluateMathExpression = () => {
    const screenValueIsEmpty = screenValue.length === 0;
    const lastScreenCalcIsMathChar = !isLastCharANumber();

    if (screenValueIsEmpty || lastScreenCalcIsMathChar) return;

    setScreenValue(() => {
      const result = evaluateExpression(screenValue);
      const formatedResult = displayFormatPossibleFloatResult(result);
      return formatedResult!;
    });
  };

  return {
    screenValue,
    clearScreenCalc,
    displayLastResult,
    eraseLastDigitFromScreenCalc,
    lastResult,
    insertNumberToScreenCalc,
    insertMathCharToScreenCalc,
    evaluateMathExpression,
  };
};
