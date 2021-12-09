const KeyButtons = (props) => {
  const buttons = [
    "/",
    "1",
    "2",
    "3",
    "*",
    "4",
    "5",
    "6",
    "+",
    "7",
    "8",
    "9",
    "-",
    ".",
    "0",
  ];
  return buttons.map((item) => {
    return (
      <button onClick={props.addToCalculation} key={item}>
        {item}
      </button>
    );
  });
};

export default KeyButtons;
