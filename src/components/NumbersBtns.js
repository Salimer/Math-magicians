import PropTypes from 'prop-types';

function NumbersBtns({ handleButtonClick }) {
  return (
    <div className="numbers">
      <button type="button" className="button" onClick={handleButtonClick}>AC</button>
      <button type="button" className="button" onClick={handleButtonClick}>+/-</button>
      <button type="button" className="button" onClick={handleButtonClick}>%</button>
      <button type="button" className="button" onClick={handleButtonClick}>7</button>
      <button type="button" className="button" onClick={handleButtonClick}>8</button>
      <button type="button" className="button" onClick={handleButtonClick}>9</button>
      <button type="button" className="button" onClick={handleButtonClick}>4</button>
      <button type="button" className="button" onClick={handleButtonClick}>5</button>
      <button type="button" className="button" onClick={handleButtonClick}>6</button>
      <button type="button" className="button" onClick={handleButtonClick}>1</button>
      <button type="button" className="button" onClick={handleButtonClick}>2</button>
      <button type="button" className="button" onClick={handleButtonClick}>3</button>
      <button type="button" className="button" onClick={handleButtonClick}>0</button>
      <button type="button" className="button" onClick={handleButtonClick}>.</button>
    </div>
  );
}

NumbersBtns.propTypes = { handleButtonClick: PropTypes.func.isRequired };

export default NumbersBtns;
