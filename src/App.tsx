import classNames from "classnames";
import React from "react";
import { HashRouter, Redirect, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Header";
import Lab from "./Lab";
import Recommend from "./Recommend";

function App() {
  const isMobile = false;

  return (
    <div className="App">
      <div className={classNames(isMobile ? "mobile-container" : "container")}>
        <Header />
        <HashRouter>
          <Route path="/" exact>
            <Redirect to="/lab" />
          </Route>
          <Route path="/lab" component={Lab} />
          <Route path="/recommend" component={Recommend} />
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
