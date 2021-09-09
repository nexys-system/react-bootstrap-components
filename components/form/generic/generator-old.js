import React from "../../../_snowpack/pkg/react.js";
import FormGeneric from "../../headless/form/generator-old.js";
import Layout from "../layout.js";
import Wrapper from "../wrapper.js";
import GenericInput from "./input.js";
const SubmitBtn = () => /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement("button", {
  type: "submit",
  className: "btn btn-primary"
}, "Submit"));
const GenericFrom = (props) => FormGeneric(SubmitBtn, Wrapper, Layout, GenericInput)(props);
export default GenericFrom;
