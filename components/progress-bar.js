import React from "../_snowpack/pkg/react.js";
export default ({
  value,
  colorContext,
  striped = false,
  animated = false
}) => /* @__PURE__ */ React.createElement("div", {
  className: `progress`
}, /* @__PURE__ */ React.createElement("div", {
  className: `progress-bar ${striped ? "progress-bar-striped" : ""} ${animated ? "progress-bar-animated" : ""} ${colorContext ? "bg-" + colorContext : ""}`,
  role: "progressbar",
  "aria-valuenow": value,
  "aria-valuemin": 0,
  "aria-valuemax": 100,
  style: {width: value + "%"}
}));
