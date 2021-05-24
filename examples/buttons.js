import React from "../_snowpack/pkg/react.js";
import BtnGroup from "../components/button/group.js";
import Dropdown from "../components/button/dropdown.js";
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export default () => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(BtnGroup, {
    onClick: async (v) => new Promise((resolve) => setTimeout(() => {
      console.log("status changed");
      resolve();
    }, 1e3)),
    selected: 1,
    btns: [
      {id: 1, name: "a"},
      {id: 2, name: "b"}
    ]
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Dropdown, {
    label: "fds",
    options: [{name: "fds", id: 2}]
  }));
};
