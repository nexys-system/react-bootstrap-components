import React from "../../_snowpack/pkg/react.js";
import Form from "../../components/form/generic/generator2.js";
import {FormType} from "../../components/headless/form/type.js";
var Permit;
(function(Permit2) {
  Permit2[Permit2["A"] = 0] = "A";
  Permit2[Permit2["B"] = 1] = "B";
})(Permit || (Permit = {}));
var EtatCivil;
(function(EtatCivil2) {
  EtatCivil2[EtatCivil2["celibataire"] = 0] = "celibataire";
  EtatCivil2[EtatCivil2["divorce"] = 1] = "divorce";
})(EtatCivil || (EtatCivil = {}));
const formDef = [
  {
    name: "firstName",
    label: "Firs tName",
    uiType: FormType.Text,
    optional: false
  },
  {
    name: "lastName",
    label: "Last Name",
    uiType: FormType.Text,
    optional: false
  },
  {
    name: "phonePrivate",
    label: "Telephone Privé",
    uiType: FormType.Text,
    optional: false
  },
  {
    name: "birthdate",
    label: "Date de naissance",
    uiType: FormType.Text,
    optional: false
  },
  {
    name: "phonePrivate",
    label: "Telephone Privé",
    uiType: FormType.Text,
    optional: false
  },
  {
    name: "nationality",
    label: "Nationalité",
    uiType: FormType.Text,
    optional: false
  },
  {
    name: "permit",
    label: "Permis",
    uiType: FormType.Text,
    optional: false
  },
  {
    name: "etatCivil",
    label: "Etat Civil",
    uiType: FormType.Text,
    optional: false
  },
  {
    name: "job",
    label: "Profession",
    uiType: FormType.Text,
    optional: false
  },
  {
    name: "salary",
    label: "Salaire",
    uiType: FormType.Number,
    optional: false
  },
  {
    name: "salarySince",
    label: "Salaire, depuis",
    uiType: FormType.Number,
    optional: false
  }
];
export default () => {
  const [isLoading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState();
  const handleSubmit = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setErrors({
        firstName: ["sdf"]
      });
    }, 2e3);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Form"), /* @__PURE__ */ React.createElement(Form, {
    formDef,
    isLoading,
    onSuccess: handleSubmit,
    errors
  }));
};
