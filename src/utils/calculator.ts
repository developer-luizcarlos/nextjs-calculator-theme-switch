import { evaluate } from "mathjs";

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
