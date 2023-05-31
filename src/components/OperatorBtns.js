function OperatorBtns({ handleButtonClick }) {


  return (
    <div className="operator">
      <div className="button" onClick={handleButtonClick}>/</div>
      <div className="button">*</div>
      <div className="button">-</div>
      <div className="button">+</div>
      <div className="button">=</div>
    </div>
  );
}

export default OperatorBtns;
