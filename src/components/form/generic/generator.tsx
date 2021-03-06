import React from "react";

import FormGenerator from "../../headless/form/generator";
import { FormDef } from "../../headless/form/type";
import { Wrapper } from "../index";
import FormUnit from "./input";

const BtnSubmit = ({ isLoading }: { isLoading: boolean }) => (
  <button disabled={isLoading} type="submit" className={"btn btn-primary"}>
    {isLoading && (
      <>
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        <span className="sr-only">...Loading</span>
      </>
    )}

    {!isLoading && <>Submit</>}
  </button>
);

const FormWDef = <A,>(formDef: FormDef<A>[]) =>
  FormGenerator<A>(Wrapper, FormUnit, BtnSubmit, formDef);

export default FormWDef;
