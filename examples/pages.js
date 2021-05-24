import Buttons from "./buttons.js";
import Tabs from "./tabs/index.js";
import Form from "./form/index.js";
export const pages = [
  {name: "Buttons", component: Buttons},
  {name: "Tabs", component: Tabs},
  {name: "Form", component: Form}
];
export const toHref = (p) => "/example/" + p.toLocaleLowerCase();
