import PropTypes from 'prop-types';

function OperatorBtns({ handleButtonClick }) {
  return (
    <div className="operator">
      <button type="button" className="button" onClick={handleButtonClick}>÷</button>
      <button type="button" className="button" onClick={handleButtonClick}>x</button>
      <button type="button" className="button" onClick={handleButtonClick}>-</button>
      <button type="button" className="button" onClick={handleButtonClick}>+</button>
      <button type="button" className="button" onClick={handleButtonClick}>=</button>
    </div>
  );
}

OperatorBtns.propTypes = { handleButtonClick: PropTypes.func.isRequired };

export default OperatorBtns;
