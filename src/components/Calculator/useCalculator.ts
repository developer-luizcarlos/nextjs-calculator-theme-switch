import {
  calculatePercentage,
  displayFormatPossibleFloatResult,
  isValidPercentageExpression,
  evaluateExpression,
} from "@/utils/calculator";
import { useState } from "react";

export function useCalculator() {
  const [screenValue, setScreenValue] = useState("0");
  const [lastResult, setLastResult] = useState("");

  function clearScreenCalc() {
    return setScreenValue("0");
  }

  function displayLastResult(result: string | number): void {
    const formatedResult = displayFormatPossibleFloatResult(result);
    const expression: string = `${screenValue} = ${formatedResult}`;
    setLastResult(expression);
  }

  function eraseLastDigitFromScreenCalc() {
    return setScreenValue(() => screenValue.length === 1 ? "0" : screenValue.slice(0, -1)
    );
  }

  function isLastCharANumber(): boolean {
    const lastChar: string | undefined = screenValue.at(-1);
    if(lastChar === "" || lastChar === undefined) return false;

    const lastCharToNumber = parseFloat(lastChar);
    return !isNaN(lastCharToNumber);
  }

  function insertMathCharToScreenCalc(character: string) {
    const isLastCharNum: boolean = isLastCharANumber();
    const lastScreenCalcChar: string = screenValue.at(-1)!;

    if(!isLastCharNum && lastScreenCalcChar !== ")") return;

    setScreenValue((previousValue) => {
      return previousValue.concat(character);
    });
  }

  function insertNumberToScreenCalc(value: string): void {
    return setScreenValue((previousValue) => {
      return previousValue === "0" ? value : previousValue.concat(value);
    });
  }

  function insertParenthesesToScreenCalc() {
    if(!isLastCharANumber()) return;

    const indexOpenParentheses: number = screenValue!.lastIndexOf("(");
    const indexCloseParentheses: number = screenValue!.lastIndexOf(")");

    if(screenValue === "0") {
      setScreenValue(() => indexOpenParentheses > indexCloseParentheses ? ")" : "("
      );
      return;
    }

    setScreenValue(() => indexOpenParentheses > indexCloseParentheses
      ? screenValue + ")"
      : screenValue + "("
    );
  }

  function evaluateMathExpression() {
    const isScreenValueEmpty: boolean = screenValue.length === 0;
    const isLastScreenCalcMathChar: boolean = !isLastCharANumber();
    const lastScreenCalcChar: string = screenValue.at(-1)!;

    if(isScreenValueEmpty ||
      (isLastScreenCalcMathChar && lastScreenCalcChar !== ")"))
      return;

    const expression: string = screenValue;
    if(isValidPercentageExpression(expression)) {
      evaluatePercentage();
      return;
    }

    setScreenValue(() => {
      const result = evaluateExpression(screenValue);
      const formatedResult = displayFormatPossibleFloatResult(result);
      return formatedResult!;
    });
    displayLastResult(evaluateExpression(screenValue));
  }

  function evaluatePercentage() {
    const expression: string = screenValue;
    const result = calculatePercentage(expression);
    setScreenValue(() => `${result}`);
    displayLastResult(`${result}`);
  }

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
}
