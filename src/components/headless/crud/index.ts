import { Types } from "@nexys/core-list";

import { FormDef, FormProps } from "../form/type";
import { ViewField } from "../view/type";
import { ListProps } from "../list/type";

import CrudGenericWForm from "./w-form ";
import * as T from "./type";

// this one will generate the form based on the definition
export const CrudGeneric =
  <A extends { id: Id }, Id>(
    ListGeneric: (a: ListProps<A, Id>) => JSX.Element,
    DetailGeneric: T.DetailGenericType<A, Id>,
    FormWDef: <A>(formDef: FormDef<A>[]) => (p: FormProps<A>) => JSX.Element
  ) =>
  (
    def: Types.Definition<A>,
    defDetail: FormDef<A>[],
    viewFields: ViewField<A>[],
    urlPrefix: string,
    crud: T.CrudRequest<A, Id>,
    extras?: T.ExtraUnit<A>[],
    options?: T.CrudOptions
  ) => {
    const Form = FormWDef<A>(defDetail);

    return CrudGenericWForm<A, Id>(ListGeneric, DetailGeneric, Form)(
      def,
      viewFields,
      urlPrefix,
      crud,
      extras,
      options
    );
  };

export default CrudGeneric;
