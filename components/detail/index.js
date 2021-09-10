import React from "../../_snowpack/pkg/react.js";
import Layout from "./layout.js";
import Detail from "./main.js";
const DetailWLayout = (Form, viewFields, {update, detail, deleteById, getOptions}, redirectUrl, showToggle = true) => {
  return ({
    title,
    backUrl,
    detailColWidth,
    extras
  }) => {
    const D = Detail(Form, viewFields, {update, detail, deleteById, getOptions}, redirectUrl, showToggle);
    return /* @__PURE__ */ React.createElement(Layout, {
      title,
      backUrl,
      Detail: D,
      detailColWidth,
      extras
    });
  };
};
export default DetailWLayout;
