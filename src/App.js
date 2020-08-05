// ****************************************************
// *-------- LE BON COIN - REPLIQUE - FRONT ----------*
// ****************************************************

// IMPORT DES PACKAGES
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// ----------------------------------------------------
// IMPORT DES COMPONENTS
import Search from "../src/assets/components/Search";
import TopBar from "../src/assets/components/TopBar";
// IMPORT DES CONTAINERS
import Offers from "../src/assets/containers/Offers";
import Offer from "../src/assets/containers/Offer";
import Login from "../src/assets/containers/Login";
import Signup from "../src/assets/containers/Signup"
// ----------------------------------------------------
function App() {
  // ON DECLARE LES STATES :
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Search />
        <Switch>
          <Route path="/offers/">
            <Offers />
          </Route>
          <Route path="/offer/:id">
            <Offer />
          </Route>
          <Route path="/login/">
            <Login />
          </Route>
          <Route path="/signup/">
            <Signup />
          </Route>
          <Route exact path="/">
            <Offers />
          </Route>
        </Switch>
        <p>METTRE FOOTER</p>
      </Router>
    </div>
  );
}
// ----------------------------------------------------
export default App;
// ----------------------------------------------------
// ----------------------THE-END-----------------------
// ----------------------------------------------------
