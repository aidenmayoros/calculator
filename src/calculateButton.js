const CalculateButton = (props) => {
  return (
    <button onClick={props.onCalculation} className="span-two">
      =
    </button>
  );
};

export default CalculateButton;
