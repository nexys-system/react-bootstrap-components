import React from "../../_snowpack/pkg/react.js";
export const WLoader = (Loader) => ({
  getData,
  Component
}) => {
  const [data, setData] = React.useState(void 0);
  if (data !== void 0) {
    return /* @__PURE__ */ React.createElement(Component, {
      data
    });
  }
  getData().then(setData);
  return /* @__PURE__ */ React.createElement(Loader, null);
};
export default WLoader;
