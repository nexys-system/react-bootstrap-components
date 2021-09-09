import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import * as Links from "./links";

import Form from "./examples/form";
import Buttons from "./examples/buttons";
import Tabs from "./examples/tabs";
import FormContext from "./examples/form-context";
import List from "./examples/list";

const NotFound = () => (
  <p>
    <i>Page Not Found</i>
  </p>
);

export default () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />

      <Route exact path={Links.links.form.link} component={Form} />
      <Route
        exact
        path={Links.links.formContext.link}
        component={FormContext}
      />
      <Route exact path={Links.links.tabs.link} component={Tabs} />
      <Route exact path={Links.links.buttons.link} component={Buttons} />
      <Route exact path={Links.links.list.link} component={List} />

      <Route component={NotFound} />
    </Switch>
  );
};
