import {
  evaluateExpression,
  formatPossibleFloatResult,
} from "@/utils/calculator";
import { useState } from "react";

export function useCalculator() {
  const [screenValue, setScreenValue] = useState("0");
  const [lastResult, setLastResult] = useState("");

  function clearScreenCalc() {
    return setScreenValue("0");
  }

  function displayLastResult(result: string | number): void {
    const formatedResult = formatPossibleFloatResult(result);
    const expression: string = `${screenValue} = ${formatedResult}`;
    setLastResult(expression);
  }

  function eraseLastDigitFromScreenCalc() {
    return setScreenValue(() =>
      screenValue.length === 1 ? "0" : screenValue.slice(0, -1)
    );
  }

  function evaluateMathExpression() {
    const isScreenValueEmpty: boolean = screenValue.length === 0;
    const isLastScreenCalcMathChar: boolean = !isLastCharANumber();
    const lastScreenCalcChar: string = screenValue.at(-1)!;

    if (
      isScreenValueEmpty ||
      (isLastScreenCalcMathChar && lastScreenCalcChar !== ")")
    )
      return;

    setScreenValue(() => {
      const result = evaluateExpression(screenValue);
      const formatedResult = formatPossibleFloatResult(result);
      return formatedResult!;
    });
    displayLastResult(evaluateExpression(screenValue));
  }

  function switchBackToLastExpression() {
    const lastResultFirstSpace = lastResult.indexOf(" ");
    const lastExpression: string =
      lastResult !== "" && lastResultFirstSpace !== -1
        ? lastResult.slice(0, lastResultFirstSpace)
        : "0";

    setScreenValue(lastExpression);
  }

  function isLastCharANumber(): boolean {
    const lastChar: string | undefined = screenValue.at(-1);
    if (lastChar === "" || lastChar === undefined) return false;

    const lastCharToNumber = parseFloat(lastChar);
    return !isNaN(lastCharToNumber);
  }

  function insertMathCharToScreenCalc(character: string) {
    const isLastCharNum: boolean = isLastCharANumber();
    const lastScreenCalcChar: string = screenValue.at(-1)!;

    if (!isLastCharNum && lastScreenCalcChar !== ")") return;

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
    if (!isLastCharANumber()) return;

    const indexOpenParentheses: number = screenValue!.lastIndexOf("(");
    const indexCloseParentheses: number = screenValue!.lastIndexOf(")");

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
  }

  return {
    screenValue,
    clearScreenCalc,
    eraseLastDigitFromScreenCalc,
    evaluateMathExpression,
    insertMathCharToScreenCalc,
    insertNumberToScreenCalc,
    insertParenthesesToScreenCalc,
    lastResult,
    switchBackToLastExpression,
  };
}
