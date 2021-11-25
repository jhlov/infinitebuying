import classNames from "classnames";
import React from "react";
import { isMobile } from "react-device-detect";
import { HashRouter, Redirect, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Header";
import Lab from "./Lab";
import Rsi from "./Rsi";

function App() {
  return (
    <div className="App">
      <div className={classNames(isMobile ? "mobile-container" : "container")}>
        <Header />
        <HashRouter>
          <Route path="/" exact>
            <Redirect to="/lab" />
          </Route>
          <Route path="/lab" component={Lab} />
          <Route path="/rsi" component={Rsi} />
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
