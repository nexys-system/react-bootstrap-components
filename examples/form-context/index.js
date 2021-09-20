import React from "../../_snowpack/pkg/react.js";
import * as GenericForm from "../../components/form/generic/generator/index.js";
import View from "../../components/form/generic/view/index.js";
import Toggle from "../../components/form/generic/toggle/index.js";
import {SwapComponent} from "../../components/tabs/index.js";
import {FormType} from "../../components/headless/form/type.js";
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
  const PToggle = Toggle(structure);
  const toggle = /* @__PURE__ */ React.createElement(PToggle, {
    onSuccess: handleSubmit,
    data: sampleData
  });
  const view = /* @__PURE__ */ React.createElement(View, {
    data: sampleData,
    structure
  });
  const PForm = GenericForm.FormWDef(structure);
  const form = /* @__PURE__ */ React.createElement(PForm, {
    valueDefault: sampleData,
    onSuccess: handleSubmit
  });
  return /* @__PURE__ */ React.createElement(SwapComponent, {
    navs: [
      {name: "Form", Component: form},
      {name: "View", Component: view},
      {name: "Toggle", Component: toggle}
    ]
  });
};
