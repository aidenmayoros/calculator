const DisplayOutputs = (props) => {
  return (
    <div className="output">
      <div className="previous-number">
        {Number(props.previousNumber).toLocaleString()} {props.operation}
      </div>
      <div className="current-number">
        {Number(props.currentNumber).toLocaleString()}
      </div>
    </div>
  );
};

export default DisplayOutputs;
