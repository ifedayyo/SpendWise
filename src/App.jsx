//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
import React from "react";
import { NavLink, Route } from "react-router-dom";

import { Routes } from "react-router-dom";

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

      <NavLink to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/aboutme" activeClassName="active">
        About{" "}
      </NavLink>
      <NavLink to="/portfolio" activeClassName="active">
        Portfolio
      </NavLink>
    </div>
  );
}

export default App;
