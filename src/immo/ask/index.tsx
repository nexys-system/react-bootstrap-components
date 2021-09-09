import React from "react";
import Form from "../../examples/form/form";
import { FormDef, FormType } from "../../examples/form/type";
import * as V from "@nexys/validation";

enum Permit {
  A,
  B,
}

enum EtatCivil {
  celibataire,
  divorce,
}

interface Data {
  firstName: string;
  lastName: string;
  phonePrivate: string;
  phoneProfessional?: string;
  birthdate: Date;
  nationality: { id: number; name: string };
  permit?: Permit;
  etatCivil: EtatCivil;
  job: string;
  employer: string;
  salary: number;
  salarySince: Date;
}

const formDef: FormDef<Data>[] = [
  {
    name: "firstName",
    label: "Firs tName",
    uiType: FormType.Text,
    optional: false,
  },
  {
    name: "lastName",
    label: "Last Name",
    uiType: FormType.Text,
    optional: false,
  },
  {
    name: "phonePrivate",
    label: "Telephone Privé",
    uiType: FormType.Text,
    optional: false,
  },
  {
    name: "birthdate",
    label: "Date de naissance",
    uiType: FormType.Text,
    optional: false,
  },
  {
    name: "phonePrivate",
    label: "Telephone Privé",
    uiType: FormType.Text,
    optional: false,
  },
  {
    name: "nationality",
    label: "Nationalité",
    uiType: FormType.Text,
    optional: false,
  },
  {
    name: "permit",
    label: "Permis",
    uiType: FormType.Text,
    optional: false,
  },
  {
    name: "etatCivil",
    label: "Etat Civil",
    uiType: FormType.Text,
    optional: false,
  },
  {
    name: "job",
    label: "Profession",
    uiType: FormType.Text,
    optional: false,
  },
  {
    name: "salary",
    label: "Salaire",
    uiType: FormType.Number,
    optional: false,
  },
  {
    name: "salarySince",
    label: "Salaire, depuis",
    uiType: FormType.Number,
    optional: false,
  },
];

export default () => {
  const [isLoading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<V.Type.ErrorOut | V.Type.Error>();

  const handleSubmit = async () => {
    setLoading(true);

    setTimeout(() => {
      // console.log("ds");
      setLoading(false);
      setErrors({
        firstName: ["sdf"],
      });
      // setNotification({ text: "hello2", type: NotificationType.banner });
      // setNotification({ text: "my content", type: NotificationType.toast });
    }, 2000);
  };

  return (
    <>
      <h1>Form</h1>
      <Form
        formDef={formDef}
        isLoading={isLoading}
        onSuccess={handleSubmit}
        errors={errors}
      />
    </>
  );
};
