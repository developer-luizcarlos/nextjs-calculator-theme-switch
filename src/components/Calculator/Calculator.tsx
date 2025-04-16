import "./Calculator.css";

const Calculator: React.FC = () => {
  return (
    <article className="calc">
      <div></div>
      <header className="calc__header">
        <span className="calc__last-result">5.55</span>
        <input type="text" disabled value={"0.00"} className="calc__display" />
      </header>
      <div className="calc__pad"></div>
    </article>
  );
};

export default Calculator;
