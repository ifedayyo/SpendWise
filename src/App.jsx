import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./HomePage";
import

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <HomePage />

     
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <FootBar />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<PageNotFound />} />
        {/* <Route path="firstproject" element={<FirstProject />} />
         */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

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

function FootBar() {
  return <div></div>;
}

      {/** <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> **/}
    </>
  );
}

export default App;
