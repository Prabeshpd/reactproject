import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Home from "../components/Home/index";
import Dashboard from "../components/Dashboard/index";
import Task from "../components/task/index";

const router = (
  <Switch>
    <Route path="/" exact component={Home}></Route>
    <Route path="/task" component={Task}></Route>
  </Switch>
);

class RouterComponent extends React.Component {
  render() {
    return router;
  }
}

export default RouterComponent;
