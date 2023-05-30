import './Calculator.scss';
import OperatorBtns from './OperatorBtns';
import NumbersBtns from './NumbersBtns';

function Calculator() {
  return (
    <article className="calculator-container">
      <div className="screen">0</div>
      <OperatorBtns />
      <NumbersBtns />
    </article>
  );
}

export default Calculator;
