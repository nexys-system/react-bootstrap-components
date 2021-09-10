import React from "../../_snowpack/pkg/react.js";
import List from "../../components/list/index.js";
const Default = () => /* @__PURE__ */ React.createElement(List, {
  data: [{name: "Doe", firstName: "John"}],
  def: [
    {name: "name", label: "Name"},
    {name: "firstName", label: "First Name"},
    {name: "uuid", label: "Custom", render: () => "hello"}
  ]
});
export default Default;
