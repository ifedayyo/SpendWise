//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
import React from "react";
import { Route } from "react-router-dom";

import { Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import "./App.css";
import HomePage from "./HomePage";
import Register from "./Register";
import UserAccount from "./UserAccount";

function App() {
  return (
    <>
      <HomePage />

      <React.StrictMode>
        <NavBar />
        {/*<NavBar />
          <FootBar />
          the homepage is where users can login
          */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/useraccount" element={<UserAccount />} />
          {/* <Route path="firstproject" element={<FirstProject />} />
           */}
        </Routes>
      </React.StrictMode>
    </>
  );
}

// const [count, setCount] = useState(0)

function NavBar() {
  return (
    <div className="navbar">
      {/*<img
        className="logo"
        src={logo}
        alt="Portfolio"
        width="100"
        height="50"
      />*/}

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
