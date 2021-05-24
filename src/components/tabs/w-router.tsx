import React from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import * as T from "./type";
import * as U from "./utils";

const Nav = ({ navs }: { navs: T.LinkAndComponentAndPath[] }) => (
  <ul className="nav nav-tabs">
    {navs.map((nav, i) => {
      const { pathname } = useLocation();
      const isSelected = U.getIsSelected(pathname, nav.path, navs);

      return (
        <li key={i} className="nav-item">
          <Link
            className={`nav-link ${isSelected ? "active" : ""}`}
            to={nav.path}
          >
            {nav.label}
          </Link>
        </li>
      );
    })}
  </ul>
);

const Router = ({ navs }: { navs: T.LinkAndComponentAndPath[] }) => (
  <Switch>
    {navs.map((l, i) => (
      <Route key={i} path={l.path} component={l.Component} />
    ))}
  </Switch>
);

export default ({
  navs,
  urlPrefix = "",
}: {
  navs: Omit<T.LinkAndComponentAndPath, "path">[];
  urlPrefix?: string;
}) => {
  const list: T.LinkAndComponentAndPath[] = navs.map((x) => {
    const path = U.toHref(x, urlPrefix);

    return { path, ...x };
  });

  // for the router, sort by path length, to start with the longest to the shortest path to avoid path confusion then and no need to use `exact=true`
  // the [...] is needed to avoid interfering with the other components, ie a copy is necessary
  const listRouter = [...list].sort((a, b) => b.path.length - a.path.length);

  return (
    <>
      <Nav navs={list} />
      <Router navs={listRouter} />
    </>
  );
};
