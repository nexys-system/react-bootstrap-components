import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import Examples from "./examples/index";

const NotFound = () => (
  <p>
    <i>Page Not Found</i>
  </p>
);

export default () => {
  return (
    <Switch>
      <Route path={"/example"} component={Examples} />
      <Route exact path={"/"} component={Home} />

      <Route component={NotFound} />
    </Switch>
  );
};
