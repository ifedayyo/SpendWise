import { Textfit } from "react-textfit";
import { PropTypes } from "prop-types";
import { useState } from "react";

import "./index.css";

const btn = [
  ["C", "%", "/"],
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];
export default function Calculate() {
  const [screenValue, setScreenValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  const closeCalculator = () => setIsOpen(false);

  //the function below will handle button clicks
  const handleButtonClick = (value) => {
    //If it is a number
    if (!isNaN(value)) {
      setScreenValue((prevValue) =>
        prevValue === "0" ? String(value) : prevValue + String(value)
      );
    }

    //If it is an operator
    if (["+", "-", "*", "/"].includes(value)) {
      setOperator(value);
      setPreviousValue(screenValue);
      setScreenValue("0");
    }

    //If it is the equal (=) sign, perform the calculation
    else if (value === "=") {
      if (operator && previousValue) {
        calculateResult();
      }
    }

    //iF IT IS c, reset the calculator
    else if (value === "C") {
      setScreenValue("0");
      setPreviousValue(null);
      setOperator(null);
    }
  };
  const calculateResult = () => {
    const prev = parseFloat(previousValue);
    const current = parseFloat(screenValue);
    let result;

    switch (operator) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
      default:
        return;
    }
    setScreenValue(String(result));
    setOperator(null);
    setPreviousValue(null);
  };
  //Update income or expenses based on the current option

  return (
    <>
      {isOpen && (
        <div className="calculator-container">
          <button onClick={closeCalculator} className="close-btn">
            X
          </button>

          <Screen value={screenValue} />
          <ButtonBox>
            {btn.flat().map((value, i) => {
              //console.log("Button rendered:", value);
              return (
                <Button
                  key={i}
                  className={value === "=" ? "equals" : ""}
                  value={value}
                  onClick={() => handleButtonClick(value)} //Passing the value, not btn array
                />
              );
            })}
          </ButtonBox>
        </div>
      )}
    </>
  );
}

function Screen({ value }) {
  return (
    <Textfit className="screen" mode="single" max={70}>
      {value}
    </Textfit>
  );
}
Screen.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

function ButtonBox({ children }) {
  return <div className="buutton-box">{children}</div>;
}
ButtonBox.propTypes = {
  children: PropTypes.node.isRequired,
};

function Button({ value, onClick }) {
  return (
    <button className="button-calculator" onClick={onClick}>
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};
