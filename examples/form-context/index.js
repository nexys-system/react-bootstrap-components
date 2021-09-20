import React from "../../_snowpack/pkg/react.js";
import GenericForm from "../../components/form/generic/generator.js";
import {SwapComponent} from "../../components/tabs/index.js";
import {FormType} from "../../components/headless/form/type.js";
import Toggle from "../../components/toggle.js";
const structure = [
  {
    name: "name",
    label: "My Name",
    uiType: FormType.Text,
    optional: false
  },
  {
    name: "age",
    label: "My Age",
    uiType: FormType.Number,
    optional: false
  },
  {
    name: "category",
    label: "My Cat",
    uiType: FormType.Select,
    options: [
      {id: 1, name: "a"},
      {id: 2, name: "b"}
    ],
    optional: false
  }
];
const sampleData = {name: "my name", age: 32, category: 2};
export default () => {
  const handleSubmit = (d) => {
    return Promise.resolve();
  };
  const PToggle = Toggle(() => /* @__PURE__ */ React.createElement(React.Fragment, null, "edit"), () => /* @__PURE__ */ React.createElement(React.Fragment, null, "view"));
  const toggle = /* @__PURE__ */ React.createElement(PToggle, {
    id: 2,
    data: sampleData
  });
  const PForm = GenericForm(structure);
  const form = /* @__PURE__ */ React.createElement(PForm, {
    valueDefault: sampleData,
    onSuccess: handleSubmit
  });
  return /* @__PURE__ */ React.createElement(SwapComponent, {
    navs: [
      {name: "Form", Component: form},
      {name: "Toggle", Component: toggle}
    ]
  });
};
