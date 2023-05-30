import './Calculator.scss';

function Calculator() {
  return (
    <article className="calculator-container">
      <div className="screen" />
      <div className="operator">
        <div type="button">/</div>
        <div type="button">*</div>
        <div type="button">-</div>
        <div type="button">+</div>
        <div type="button">=</div>
      </div>
      <div className="numbers">
        <div type="button">AC</div>
        <div type="button">+/-</div>
        <div type="button">%</div>
        <div type="button">7</div>
        <div type="button">8</div>
        <div type="button">9</div>
        <div type="button">4</div>
        <div type="button">5</div>
        <div type="button">6</div>
        <div type="button">1</div>
        <div type="button">2</div>
        <div type="button">3</div>
        <div type="button">0</div>
        <div type="button">.</div>
      </div>
    </article>
  );
}

export default Calculator;
