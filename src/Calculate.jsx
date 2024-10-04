import { Textfit } from "react-textfit";
import { PropTypes } from "prop-types";
import { useState } from "react";

import "./index.css";

const btnValues = [
  ["C", "%", "/"],
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];
export default function Calculate({ onClose }) {
  const [screenValue, setScreenValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  //the function below will handle button clicks
  const handleButtonClick = (btn) => {
    //If it is a number
    if (!isNaN(btn)) {
      setScreenValue((prevValue) =>
        prevValue === "0" ? String(btn) : prevValue + String(btn)
      );
    }

    //If it is an operator
    if (["+", "-", "*", "/"].includes(btn)) {
      setOperator(btn);
      setPreviousValue(screenValue);
      setScreenValue("0");
    }

    //If it is the equal (=) sign, perform the calculation
    if (btn === "=") {
      if (operator && previousValue) {
        calculateResult();
      }
    }

    if (btn === "C") {
      resetCalculator();
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

  const resetCalculator = () => {
    setScreenValue("0");
    setPreviousValue(null);
    setOperator(null);
  };
  return (
    <div className="calculator-container">
      <Screen value={screenValue} />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick={() => handleButtonClick(btn)}
            />
          );
        })}
      </ButtonBox>

      <button className="close-btn" onClick={onClose}>
        X
      </button>
    </div>
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

Button.defaultProps = {
  className: "",
};
