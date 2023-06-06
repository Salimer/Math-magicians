import React, { useState } from 'react';
import '../styles/style.scss';
import calculate from '../logic/calculate';
import OperatorBtns from './OperatorBtns';
import NumbersBtns from './NumbersBtns';

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (event) => {
    const clicked = event.target.textContent;
    const value = calculate(calculatorData, clicked);
    setCalculatorData(value);
  };

  const { total, operation, next } = calculatorData;
  return (
    <article className="calculator-container">
      <div className="screen">{ next || operation || total || 0 }</div>
      <OperatorBtns handleButtonClick={handleButtonClick} />
      <NumbersBtns handleButtonClick={handleButtonClick} />
    </article>
  );
}

export default Calculator;
