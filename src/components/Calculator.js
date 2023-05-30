import './Calculator.scss';

function Calculator() {
  return (
    <article className="calculator-container">
      <div className="screen">0</div>
      <div className="operator">
        <div className="button">/</div>
        <div className="button">*</div>
        <div className="button">-</div>
        <div className="button">+</div>
        <div className="button">=</div>
      </div>
      <div className="numbers">
        <div className="button">AC</div>
        <div className="button">+/-</div>
        <div className="button">%</div>
        <div className="button">7</div>
        <div className="button">8</div>
        <div className="button">9</div>
        <div className="button">4</div>
        <div className="button">5</div>
        <div className="button">6</div>
        <div className="button">1</div>
        <div className="button">2</div>
        <div className="button">3</div>
        <div className="button">0</div>
        <div className="button">.</div>
      </div>
    </article>
  );
}

export default Calculator;
