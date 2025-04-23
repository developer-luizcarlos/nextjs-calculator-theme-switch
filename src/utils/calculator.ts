import { evaluate } from "mathjs";

export const calculatePercentage = (expression: string): string => {
  const splittedExpression = expression.split("%");
  const firstNumber = parseFloat(splittedExpression[0]);
  const secondNumber = parseFloat(splittedExpression[1]);
  const result = (firstNumber / secondNumber) * 100;
  return displayFormatPossibleFloatResult(result) ?? "0";
};

export const evaluateExpression = (expression: string): number => {
  const formattedExpression = expressionFormat(expression);
  return evaluate(formattedExpression);
};

export const expressionFormat = (expression: string) => {
  let expressionValue: string = expression;
  const hasMultiplyOperator = expression.match(/X/i);
  const hasNotInvalidOperatorSymbols = hasMultiplyOperator === null;

  if (hasNotInvalidOperatorSymbols) return expression;

  if (hasMultiplyOperator) {
    expressionValue = expressionValue.replace(/X/gi, "*");
  }
  return expressionValue;
};

export const isValidPercentageExpression = (expression: string): boolean => {
  const pattern = /\d+(\.\d+)?%\d+(\.\d+)?/g;
  return pattern.test(expression);
};

export const numberFormatter = (value: number): number => {
  const formater = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 1,
    maximumFractionDigits: 4,
  });

  const formatedValue = formater.format(value);

  return parseFloat(formatedValue);
};

export const displayFormatPossibleFloatResult = (
  result: string | number
): void | string => {
  const res = typeof result === "number" ? result : parseFloat(result);

  if (isNaN(res)) return;

  const formatedValue = res === Math.floor(res) ? res : numberFormatter(res);
  return formatedValue.toString();
};
