import React from "react";

import GenericForm from "../../components/form/generic/generator";

import { SwapComponent } from "../../components/tabs";
import { FormDef, FormType } from "../../components/headless/form/type";

import Toggle from "../../components/toggle";

interface Form {
  name: string;
  age: number;
  category: number;
}

const structure: FormDef<Form>[] = [
  {
    name: "name",
    label: "My Name",
    uiType: FormType.Text,
    optional: false,
  },
  {
    name: "age",
    label: "My Age",
    uiType: FormType.Number,
    optional: false,
  },
  {
    name: "category",
    label: "My Cat",
    uiType: FormType.Select,
    options: [
      { id: 1, name: "a" },
      { id: 2, name: "b" },
    ],
    optional: false,
  },
];

const sampleData: Form = { name: "my name", age: 32, category: 2 };

export default () => {
  const handleSubmit = (d: Partial<Form>) => {
    //return Promise.reject({ name: ["my name is missing"] });
    return Promise.resolve();
  };

  const PToggle = Toggle(
    () => <>edit</>,
    () => <>view</>
  );

  const toggle = <PToggle id={2} data={sampleData} />;
  //const view = <View data={sampleData} structure={structure} />;
  const PForm = GenericForm(structure);
  const form = <PForm valueDefault={sampleData} onSuccess={handleSubmit} />;

  return (
    <SwapComponent
      navs={[
        { name: "Form", Component: form },
        //{ name: "View", Component: view },
        { name: "Toggle", Component: toggle },
      ]}
    />
  );
};
