import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Landing from "./components/Landing";
import Login from "./components/Login";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/landing" component={Landing} />
      <Route path="/login" component={Login} />

      <Redirect from="/" to="/landing" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
