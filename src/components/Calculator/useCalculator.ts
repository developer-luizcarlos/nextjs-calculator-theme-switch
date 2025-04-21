import { useState } from "react";
import { evaluateExpression } from "@/utils/calculator";

export const useCalculator = () => {
  const [screenValue, setScreenValue] = useState("0");
  const [lastResult, setLastResult] = useState("");

  const clearScreenCalc = () => setScreenValue("0");

  const displayLastResult = (): void => {
    const result = evaluateExpression(screenValue);
    const expression: string = `${screenValue} = ${result}`;
    setLastResult(expression);
  };

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
      const evaluatedExpression = evaluateExpression(screenValue);
      return evaluatedExpression.toString();
    });
  };

  return {
    screenValue,
    clearScreenCalc,
    displayLastResult,
    lastResult,
    insertNumberToScreenCalc,
    insertMathCharToScreenCalc,
    evaluateMathExpression,
  };
};
