import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route } from "react-router";
import Home from "./Home";
import GetData from "./GetData";
import Navbar from "./Navbar";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/getdata" component={GetData}></Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
