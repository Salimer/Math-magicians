import './Calculator.scss';
import calculate from '../logic/calculate';
import OperatorBtns from './OperatorBtns';
import NumbersBtns from './NumbersBtns';

function Calculator() {
    const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
    })

    const handleButtonClick = (buttonName) => {
        const result = calculate(calculatorData, buttonName);
        setCalculatorData(result);
    }

  return (
    <article className="calculator-container">
      <div className="screen">0</div>
      <OperatorBtns handleButtonClick={handleButtonClick} />
      <NumbersBtns />
    </article>
  );
}

export default Calculator;
