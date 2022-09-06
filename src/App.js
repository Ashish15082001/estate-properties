// import logo from './logo.svg';
// import './App.css';

import React from "react";
import MainHeader from "./components/main header/MainHeader";
import { Routes, Route, Navigate } from "react-router-dom";
import RentPage from "./pages/rent page/RentPage";
import NotFoundPage from "./pages/not found page/NotFoundPage";

function App() {
  return (
    <React.Fragment>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Navigate to={"/rent"} />}></Route>
        <Route path="/rent" element={<RentPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;

/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
