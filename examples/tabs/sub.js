import React from "../../_snowpack/pkg/react.js";
import TabsWRouter from "../../components/tabs/w-router.js";
const CA = ({data}) => {
  console.log("loaded CA");
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", null, "This is CA ", new Date().toLocaleTimeString()), /* @__PURE__ */ React.createElement("ul", null, data.map((d, i) => /* @__PURE__ */ React.createElement("li", {
    key: i
  }, d.name))));
};
const CB = () => {
  console.log("loaded CB");
  return /* @__PURE__ */ React.createElement("p", null, "This is CB ", new Date().toLocaleTimeString());
};
export const Sub = ({
  data,
  urlPrefix
}) => /* @__PURE__ */ React.createElement(TabsWRouter, {
  navs: [
    {label: "CA", link: "", Component: () => /* @__PURE__ */ React.createElement(CA, {
      data
    })},
    {label: "CB", Component: CB}
  ],
  urlPrefix
});
export default Sub;
