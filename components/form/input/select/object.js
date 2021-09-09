import React from "../../../../_snowpack/pkg/react.js";
import Select from "./index.js";
export default ({
  options,
  onChange,
  disabled
}) => {
  const handleChange = (v) => {
    const vOptionSet = options.find((x) => x.id === v);
    if (vOptionSet) {
      onChange(vOptionSet);
    }
  };
  return /* @__PURE__ */ React.createElement(Select, {
    onChange: handleChange,
    disabled,
    options
  });
};
