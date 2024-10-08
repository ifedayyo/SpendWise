//import { useState } from "react";
//import reactLogo from "./assets/react.svg";

import { NavLink, Route } from "react-router-dom";

import { Routes } from "react-router-dom";

import "./index.css";
import HomePage from "./HomePage";
import Register from "./Register";
import UserAccount from "./UserAccount";
import Footer from "./Footer";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/useraccount" element={<UserAccount />} />
        {/* <Route path="firstproject" element={<FirstProject />} />
         */}
      </Routes>

      <Footer />
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

      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Homepage
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Register{" "}
      </NavLink>
      <NavLink
        to="/useraccount"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Account
      </NavLink>
    </div>
  );
}

export default App;
