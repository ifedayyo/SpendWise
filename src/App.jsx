import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import HomePage from "./HomePage";
import

function App() {};

  // const [count, setCount] = useState(0)

  



function NavBar() {
  return (
    <div className="navbar">
      <img
        className="logo"
        src={logo}
        alt="Portfolio"
        width="100"
        height="50"
      />

      <Link to="/" activeClassName="active">
        Home
      </Link>
      <Link to="/aboutme" activeClassName="active">
        About{" "}
      </Link>
      <Link to="/portfolio" activeClassName="active">
        Portfolio
      </Link>
    </div>
  );
}


export default App;
