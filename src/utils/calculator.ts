import { evaluate } from "mathjs";

export function calculatePercentage(expression: string): string {
  const splittedExpression = expression.split("%");
  const firstNumber = parseFloat(splittedExpression[0]);
  const secondNumber = parseFloat(splittedExpression[1]);
  const result = (firstNumber / secondNumber) * 100;
  return formatPossibleFloatResult(result) ?? "0";
}

export function evaluateExpression(expression: string): number {
  const formattedExpression = expressionFormat(expression);
  try {
    return evaluate(formattedExpression);
  } catch {
    return 0;
  }
}

export function expressionFormat(expression: string) {
  let exp: string = expression;
  const hasMultiplicationOperator = /X/i.test(exp);
  const hasPercentageBetweenParentheses =
    /\(\s*([\d.]+)\s*%\s*([\d.]+)\s*\)/.test(exp);
  const hasPercentageOutsideParentheses = /([\d.]+)\s*%\s*([\d.]+)/.test(exp);

  if (hasMultiplicationOperator) exp = exp.replace(/X/gi, "*");
  if (hasPercentageBetweenParentheses)
    exp = exp.replace(/\(\s*([\d.]+)\s*%\s*([\d.]+)\s*\)/g, "(($1/$2)*100)");
  if (hasPercentageOutsideParentheses)
    exp = exp.replace(/([\d.]+)\s*%\s*([\d.]+)/g, "(($1/$2)*100)");

  return exp;
}

export function isValidPercentageExpression(expression: string): boolean {
  const pattern = /\d+(\.\d+)?%\d+(\.\d+)?/g;
  return pattern.test(expression);
}

export function floatNumberFormatter(value: number): string {
  const formater = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 1,
    maximumFractionDigits: 4,
  });

  const formatedValue = formater.format(value);

  return formatedValue;
}

export function formatPossibleFloatResult(
  result: string | number
): void | string {
  const res = typeof result === "number" ? result : parseFloat(result);

  if (isNaN(res)) return;

  const formatedValue =
    res === Math.floor(res) ? res : floatNumberFormatter(res);
  return formatedValue.toString();
}
