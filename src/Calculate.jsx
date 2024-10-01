import { Textfit } from "react-textfit";
import ".index/css";
export default function Calculate() {
  return <div className="calculator-container"> children </div>;
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
