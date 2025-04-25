"use client";

// Stylesheet importation
import "./Calculator.css";

// Hook importation
import { useCalculator } from "./useCalculator";

// components importation
import Button from "../Button/Button";

export default function Calculator() {
  const {
    screenValue,
    clearScreenCalc,
    eraseLastDigitFromScreenCalc,
    evaluateMathExpression,
    insertMathCharToScreenCalc,
    insertNumberToScreenCalc,
    insertParenthesesToScreenCalc,
    lastResult,
    switchBackToLastExpression,
  } = useCalculator();

  return (
    <article className="calc">
      <header className="calc__header">
        <span
          className="calc__last-result"
          onClick={switchBackToLastExpression}
        >
          {lastResult}
        </span>
        <input
          type="text"
          disabled
          value={screenValue}
          className="calc__display"
        />
      </header>
      <div className="calc__pad">
        <Button
          label="AC"
          role="action"
          handleClick={() => clearScreenCalc()}
        />
        <Button
          label="( )"
          role="action"
          handleClick={() => insertParenthesesToScreenCalc()}
        />
        <Button
          label="%"
          role="action"
          handleClick={() => insertMathCharToScreenCalc("%")}
        />
        <Button
          label="+"
          role="operational"
          handleClick={() => insertMathCharToScreenCalc("+")}
        />
        <Button
          label="7"
          role="normal"
          handleClick={() => insertNumberToScreenCalc("7")}
        />
        <Button
          label="8"
          role="normal"
          handleClick={() => insertNumberToScreenCalc("8")}
        />
        <Button
          label="9"
          role="normal"
          handleClick={() => insertNumberToScreenCalc("9")}
        />
        <Button
          label="X"
          role="operational"
          handleClick={() => insertMathCharToScreenCalc("x")}
        />
        <Button
          label="4"
          role="normal"
          handleClick={() => insertNumberToScreenCalc("4")}
        />
        <Button
          label="5"
          role="normal"
          handleClick={() => insertNumberToScreenCalc("5")}
        />
        <Button
          label="6"
          role="normal"
          handleClick={() => insertNumberToScreenCalc("6")}
        />
        <Button
          label="-"
          role="operational"
          handleClick={() => insertMathCharToScreenCalc("-")}
        />
        <Button
          label="1"
          role="normal"
          handleClick={() => insertNumberToScreenCalc("1")}
        />
        <Button
          label="2"
          role="normal"
          handleClick={() => insertNumberToScreenCalc("2")}
        />
        <Button
          label="3"
          role="normal"
          handleClick={() => insertNumberToScreenCalc("3")}
        />
        <Button
          label="/"
          role="operational"
          handleClick={() => insertMathCharToScreenCalc("/")}
        />
        <Button
          label="&#10226;"
          role="normal"
          handleClick={() => eraseLastDigitFromScreenCalc()}
        />
        <Button
          label="0"
          role="normal"
          handleClick={() => insertNumberToScreenCalc("0")}
        />
        <Button
          label="."
          role="normal"
          handleClick={() => insertMathCharToScreenCalc(".")}
        />
        <Button
          label="="
          role="operational"
          handleClick={() => {
            evaluateMathExpression();
          }}
        />
      </div>
    </article>
  );
}
