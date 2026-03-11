import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Router from "./Router/Router";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="navbar bg-[#202020] text-white">
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink to={"/users"}>Users</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to={"/products"}>Products</NavLink>
          </li>
        </ul>
      </div>
      <Router />
    </div>
  );
};

export default App;
