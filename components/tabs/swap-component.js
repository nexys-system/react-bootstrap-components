import React from "../../_snowpack/pkg/react.js";
const Nav = ({
  navs,
  option = 0
}) => {
  const [selected, setSelected] = React.useState(option);
  const navSelected = navs[selected];
  if (!navSelected) {
    throw Error("selected item does not exist");
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("ul", {
    className: "nav nav-tabs"
  }, navs.map((nav, i) => /* @__PURE__ */ React.createElement("li", {
    key: i,
    className: "nav-item"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => setSelected(i),
    className: `btn btn-outline nav-link ${i === selected ? "btn-outline-primary" : ""}`
  }, nav.name)))), navSelected.Component);
};
export default Nav;
