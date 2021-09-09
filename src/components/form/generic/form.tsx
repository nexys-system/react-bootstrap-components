import React from "react";

import FormGeneric from "../../headless/form/generic";
import * as T from "../../headless/form/type";

import Layout from "../layout";
import Wrapper from "../wrapper";
import GenericInput from "./input";

const SubmitBtn = () => (
  <Wrapper>
    <button type="submit" className={"btn btn-primary"}>
      Submit
    </button>
  </Wrapper>
);

const GenericFrom = <A,>(props: T.FormProps<A>) =>
  FormGeneric<A>(SubmitBtn, Wrapper, Layout, GenericInput)(props);

export default GenericFrom;
