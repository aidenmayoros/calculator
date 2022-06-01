import { useState } from "react";
import "./AppStyles.css";
import CalculateButton from "./calculateButton";
import DisplayOutputs from "./calculatorOutputs";
import DeleteButton from "./deleteButton";
import KeyButtons from "./keybuttons";
import ResetButton from "./resetButton";

function App() {
	const [currentNumber, setCurrentNumber] = useState("");
	const [previousNumber, setPreviousNumber] = useState("");
	const [operation, setOperation] = useState("");
	const [hasCalculated, setHasCalculated] = useState(false);

	function addToCalculation(element) {
		if (
			currentNumber.split("").includes(".") &&
			element.target.innerText === "."
		) {
			return;
		}

		if (
			["/", "*", "+", "-"].includes(element.target.innerText) &&
			currentNumber === ""
		) {
			return;
		}

		if (
			hasCalculated === true &&
			["/", "*", "+", "-"].includes(element.target.innerText)
		) {
			setPreviousNumber(currentNumber);
			setCurrentNumber("");
			setHasCalculated(false);
			setOperation(element.target.innerText);
			return;
		}

		if (["/", "*", "+", "-"].includes(element.target.innerText)) {
			setPreviousNumber(currentNumber);
			setCurrentNumber("");
			setOperation(element.target.innerText);
		} else {
			setCurrentNumber(currentNumber + element.target.innerText);
		}
	}

	function resetOutput() {
		setCurrentNumber("");
		setPreviousNumber("");
		setOperation("");
	}

	function deleteOutput() {
		if (typeof currentNumber == "number") {
			return;
		} else {
			setCurrentNumber(
				currentNumber
					.split("")
					.slice(0, currentNumber.split("").length - 1)
					.join("")
			);
		}
	}

	function makeCalculation() {
		let allOperations = {
			"+": function (a, b) {
				return a + b;
			},
			"-": function (a, b) {
				return a - b;
			},
			"*": function (a, b) {
				return a * b;
			},
			"/": function (a, b) {
				return a / b;
			},
		};

		if (operation === "" || currentNumber === "" || previousNumber === "") {
			setCurrentNumber(currentNumber);
			setPreviousNumber(previousNumber);
			setOperation(operation);
		} else {
			setCurrentNumber(
				allOperations[operation](
					parseFloat(previousNumber),
					parseFloat(currentNumber)
				).toString()
			);
			setPreviousNumber("");
			setOperation("");
			setHasCalculated(true);
		}
	}

	return (
		<div className='calculator-grid'>
			<DisplayOutputs
				currentNumber={currentNumber}
				previousNumber={previousNumber}
				operation={operation}
			/>
			<ResetButton resetOutput={resetOutput} />
			<DeleteButton deleteOutput={deleteOutput} />
			<KeyButtons addToCalculation={addToCalculation} />
			<CalculateButton onCalculation={makeCalculation} />
		</div>
	);
}

export default App;
