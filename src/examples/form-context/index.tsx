import React from "react";

import GenericForm from "../../components/form/generic/generator";
import View from "../../components/form/generic/view";
import Toggle from "../../components/form/generic/toggle";
import { SwapComponent } from "../../components/tabs";
import {
  FormDef,
  FormType,
  StructureUnit,
} from "../../components/headless/form/type";

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

  const toggle = (
    <Toggle onSuccess={handleSubmit} data={sampleData} formDef={structure} />
  );
  const view = <View data={sampleData} structure={structure} />;
  const form = (
    <GenericForm<Form>
      formDef={structure}
      valueDefault={sampleData}
      onSuccess={handleSubmit}
    />
  );

  return (
    <SwapComponent
      navs={[
        { name: "Form", Component: form },
        { name: "View", Component: view },
        { name: "Toggle", Component: toggle },
      ]}
    />
  );
};
