import React from "../../../_snowpack/pkg/react.js";
import FormGenerator from "../../headless/form/generator.js";
import {Wrapper} from "../index.js";
import FormUnit from "./input.js";
const BtnSubmit = ({isLoading}) => /* @__PURE__ */ React.createElement("button", {
  disabled: isLoading,
  type: "submit",
  className: "btn btn-primary"
}, isLoading && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", {
  className: "spinner-border spinner-border-sm",
  role: "status",
  "aria-hidden": "true"
}), /* @__PURE__ */ React.createElement("span", {
  className: "sr-only"
}, "...Loading")), !isLoading && /* @__PURE__ */ React.createElement(React.Fragment, null, "Submit"));
export default (p) => FormGenerator(Wrapper, FormUnit, BtnSubmit)(p);
