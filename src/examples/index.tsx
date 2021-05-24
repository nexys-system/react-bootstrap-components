import React from "react";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import * as Pages from "./pages";

import Layout from "./layout";

const Home = () => {
  return (
    <ul>
      {Pages.pages.map((p, i) => (
        <li key={i}>
          <Link to={Pages.toHref(p.name)}>{p.name}</Link>
        </li>
      ))}
    </ul>
  );
};

const Routes = (): JSX.Element => (
  <Switch>
    {Pages.pages.map((p, i) => (
      <Route
        key={i}
        path={Pages.toHref(p.name)}
        component={() => (
          <Layout title={p.name}>
            <p.component />
          </Layout>
        )}
      />
    ))}

    <Route component={Home} />
  </Switch>
);

export default Routes;
