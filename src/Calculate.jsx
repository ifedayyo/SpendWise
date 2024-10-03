import { Textfit } from "react-textfit";
import { PropTypes } from "prop-types";
import { useState } from "react";

import "./index.css";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];
export default function Calculate() {
  const [screenValue, setScreenValue] = useState("0");

  //the function below will handle button clicks
  const handleButtonClick = (btn) => {
    console.log(`${btn} clicked`);

    setScreenValue((prevValue) => prevValue + btn);
  };
  return (
    <div className="calculator-container">
      <Screen value={screenValue} />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          <Button
            key={i}
            className={btn === "=" ? "equals" : ""}
            value={btn}
            onClick={() => handleButtonClick(btn)}
          />;
        })}
      </ButtonBox>
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
function Button({ value, onClick, className }) {
  return (
    <button className={`'button ${className}`} onClick={onClick}>
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
