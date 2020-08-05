// ****************************************************
// *--------------------- TOPBAR ---------------------*
// ****************************************************

import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../img/logo.png";

const TopBar = () => {
  let history = useHistory();
  return (
    <div className="topbar">
      <Link to="/"><img src={logo} alt="logo" /></Link>
      <button>Déposer une annonce</button>
      <button
        onClick={() => {
          history.push("/login/");
        }}
      
      >
        Se connecter
      </button>
    </div>
  )
};
export default TopBar;
