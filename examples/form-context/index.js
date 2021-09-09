import React from "../../_snowpack/pkg/react.js";
import GenericForm from "../../components/form/generic/form.js";
import View from "../../components/form/generic/view/index.js";
import Toggle from "../../components/form/generic/toggle/index.js";
import {SwapComponent} from "../../components/tabs/index.js";
const structure = [
  {
    name: "name",
    label: "My Name"
  },
  {
    name: "age",
    label: "My Age",
    type: "number"
  },
  {
    name: "category",
    label: "My Cat",
    type: "category",
    options: [
      {id: 1, name: "a"},
      {id: 2, name: "b"}
    ]
  }
];
const sampleData = {name: "my name", age: 32, category: 2};
export default () => {
  const handleSubmit = (d) => {
    return Promise.resolve();
  };
  const toggle = /* @__PURE__ */ React.createElement(Toggle, {
    onSubmit: handleSubmit,
    data: sampleData,
    structure
  });
  const view = /* @__PURE__ */ React.createElement(View, {
    data: sampleData,
    structure
  });
  const form = /* @__PURE__ */ React.createElement(GenericForm, {
    structure,
    data: sampleData,
    onSubmit: handleSubmit
  });
  return /* @__PURE__ */ React.createElement(SwapComponent, {
    navs: [
      {name: "Form", Component: form},
      {name: "View", Component: view},
      {name: "Toggle", Component: toggle}
    ]
  });
};
