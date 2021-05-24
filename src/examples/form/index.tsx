import React from "react";

import { StructureUnit } from "../../components/form/generic/type";
import GenericForm from "../../components/form/generic/form";
import View from "../../components/form/generic/view";
import Toggle from "../../components/form/generic/toggle";
import { SwapComponent } from "../../components/tabs";

interface Form {
  name: string;
  age: number;
  category: number;
}

const structure: StructureUnit<Form>[] = [
  {
    name: "name",
    label: "My Name",
  },
  {
    name: "age",
    label: "My Age",
    type: "number",
  },
  {
    name: "category",
    label: "My Cat",
    type: "category",
    options: [
      { id: 1, name: "a" },
      { id: 2, name: "b" },
    ],
  },
];

const sampleData: Form = { name: "my name", age: 32, category: 2 };

export default () => {
  const handleSubmit = (d: Partial<Form>) => {
    //return Promise.reject({ name: ["my name is missing"] });
    return Promise.resolve();
  };

  const toggle = (
    <Toggle onSubmit={handleSubmit} data={sampleData} structure={structure} />
  );
  const view = <View data={sampleData} structure={structure} />;
  const form = (
    <GenericForm<Form>
      structure={structure}
      data={sampleData}
      onSubmit={handleSubmit}
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
