import React from "react";

import List from "../../components/table";

const Default = (): JSX.Element => (
  <List
    data={[{ name: "Doe", firstName: "John" }]}
    def={[
      { name: "name", label: "Name" },
      { name: "firstName", label: "First Name" },
      { name: "uuid", label: "Custom", render: () => "hello" },
    ]}
  />
);

export default Default;
