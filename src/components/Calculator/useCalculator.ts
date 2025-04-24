import {
  calculatePercentage,
  displayFormatPossibleFloatResult,
  isValidPercentageExpression,
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

  const insertMathCharToScreenCalc = (character: string) => {
    const isLastCharNum: boolean = isLastCharANumber();
    const lastScreenCalcChar: string = screenValue.at(-1)!;

    if (!isLastCharNum && lastScreenCalcChar !== ")") return;

    setScreenValue((previousValue) => {
      return previousValue.concat(character);
    });
  };

  const insertNumberToScreenCalc = (value: string): void =>
    setScreenValue((previousValue) => {
      return previousValue === "0" ? value : previousValue.concat(value);
    });

  const insertParenthesesToScreenCalc = () => {
    const indexOpenParentheses = screenValue!.lastIndexOf("(");
    const indexCloseParentheses = screenValue!.lastIndexOf(")");

    if (screenValue === "0") {
      setScreenValue(() =>
        indexOpenParentheses > indexCloseParentheses ? ")" : "("
      );
      return;
    }

    setScreenValue(() =>
      indexOpenParentheses > indexCloseParentheses
        ? screenValue + ")"
        : screenValue + "("
    );
  };

  const evaluateMathExpression = () => {
    const screenValueIsEmpty = screenValue.length === 0;
    const lastScreenCalcIsMathChar = !isLastCharANumber();

    if (screenValueIsEmpty || lastScreenCalcIsMathChar) return;

    const expression: string = screenValue;
    if (isValidPercentageExpression(expression)) {
      evaluatePercentage();
      return;
    }

    setScreenValue(() => {
      const result = evaluateExpression(screenValue);
      const formatedResult = displayFormatPossibleFloatResult(result);
      return formatedResult!;
    });
    displayLastResult();
  };

  const evaluatePercentage = () => {
    const expression: string = screenValue;
    const result = calculatePercentage(expression);
    setScreenValue(() => `${result}%`);
    displayLastResult();
  };

  return {
    screenValue,
    clearScreenCalc,
    eraseLastDigitFromScreenCalc,
    evaluateMathExpression,
    lastResult,
    insertMathCharToScreenCalc,
    insertNumberToScreenCalc,
    insertParenthesesToScreenCalc,
  };
};
