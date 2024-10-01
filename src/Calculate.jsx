import { Textfit } from "react-textfit";
import "./index.css";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];
export default function Calculate() {
  return (
    <Screen className="calculator-container">
      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick={() => {
                console.log(`${btn} clicked`);
              }}
            />
          );
        })}
      </ButtonBox>
    </Screen>
  );
}

function Screen() {
  return (
    <Textfit className="screen" mode="single" max={70}>
      value
    </Textfit>
  );
}

function ButtonBox() {
  return <div className="buutton-box">children</div>;
}

function Button() {
  return (
    <button className="button" onClick={onClick}>
      value
    </button>
  );
}
