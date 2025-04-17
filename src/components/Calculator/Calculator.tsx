import "./Calculator.css";

// components importation
import Button from "../Button/Button";

const Calculator: React.FC = () => {
  return (
    <article className="calc">
      <div></div>
      <header className="calc__header">
        <span className="calc__last-result">5.55</span>
        <input type="text" disabled value={"0.00"} className="calc__display" />
      </header>
      <div className="calc__pad">
        <Button label="AC" role="action" />
        <Button label="&#8730;" role="action" />
        <Button label="%" role="action" />
        <Button label="+" role="operational" />
        <Button label="7" role="normal" />
        <Button label="8" role="normal" />
        <Button label="9" role="normal" />
        <Button label="X" role="operational" />
        <Button label="4" role="normal" />
        <Button label="5" role="normal" />
        <Button label="6" role="normal" />
        <Button label="-" role="operational" />
        <Button label="1" role="normal" />
        <Button label="2" role="normal" />
        <Button label="3" role="normal" />
        <Button label="+" role="operational" />
        <Button label="&#10226;" role="normal" />
        <Button label="0" role="normal" />
        <Button label="." role="normal" />
        <Button label="=" role="operational" />
      </div>
    </article>
  );
};

export default Calculator;
