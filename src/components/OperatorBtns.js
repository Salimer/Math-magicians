import PropTypes from 'prop-types';

function OperatorBtns({ handleButtonClick }) {
  return (
    <>
    <div className="operator">
      <div className="button" onClick={handleButtonClick}>÷</div>
      <div className="button" onClick={handleButtonClick}>*</div>
      <div className="button" onClick={handleButtonClick}>-</div>
      <div className="button" onClick={handleButtonClick}>+</div>
      <div className="button" onClick={handleButtonClick}>=</div>
    </div>
  );
}

OperatorBtns.propTypes = { handleButtonClick: PropTypes.func.isRequired };

export default OperatorBtns;
