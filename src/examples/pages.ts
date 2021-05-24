import Buttons from "./buttons";
import Tabs from "./tabs";
import Form from "./form";

export const pages = [
  { name: "Buttons", component: Buttons },
  { name: "Tabs", component: Tabs },
  { name: "Form", component: Form },
];

export const toHref = (p: string) => "/example/" + p.toLocaleLowerCase();
