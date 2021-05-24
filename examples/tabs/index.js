import React from "../../_snowpack/pkg/react.js";
import TabsWRouter from "../../components/tabs/w-router.js";
import WLoader from "../../components/w-loader.js";
import * as DataService from "./data.js";
import Sub from "./sub.js";
const A = ({detail}) => {
  console.log("loaded AA");
  return /* @__PURE__ */ React.createElement("p", null, "This is A ", new Date().toLocaleTimeString(), " ", JSON.stringify(detail));
};
const B = () => {
  console.log("loaded B");
  return /* @__PURE__ */ React.createElement("p", null, "This is B ", new Date().toLocaleTimeString());
};
const C = () => {
  console.log("loaded C");
  return /* @__PURE__ */ React.createElement(WLoader, {
    Component: ({data}) => /* @__PURE__ */ React.createElement(Sub, {
      data,
      urlPrefix: urlPrefix + "/c"
    }),
    getData: DataService.getSocialMedia
  });
};
const urlPrefix = "/example/tabs";
const Main = ({data}) => {
  const navs = [
    {label: "MyA", link: "", Component: () => /* @__PURE__ */ React.createElement(A, {
      detail: data
    })},
    {label: "Detail", Component: B},
    {label: "C", Component: C}
  ];
  return /* @__PURE__ */ React.createElement(TabsWRouter, {
    navs,
    urlPrefix
  });
};
export default () => /* @__PURE__ */ React.createElement(WLoader, {
  Component: Main,
  getData: DataService.getProfile
});
