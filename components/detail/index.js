import React from "../../_snowpack/pkg/react.js";
import Layout from "./layout.js";
import Detail from "./main.js";
const DetailWLayout = (title, Form, viewFields, {update, detail, deleteById, getOptions}, redirectUrl, showToggle = true, detailColWidth = 6, extras) => {
  return ({backUrl}) => {
    const D = Detail(title, Form, viewFields, {update, detail, deleteById, getOptions}, redirectUrl, showToggle, detailColWidth, extras);
    return /* @__PURE__ */ React.createElement(Layout, {
      backUrl,
      Detail: D
    });
  };
};
export default DetailWLayout;
