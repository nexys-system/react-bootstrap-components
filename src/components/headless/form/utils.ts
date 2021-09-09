import * as V from "@nexys/validation";
import { FormDef, FormType } from "./type";

export const getValue = <A extends number | string>(
  v: string | undefined
): A | undefined => {
  if (v === "" || v === undefined || v === null) {
    return undefined;
  }

  const vn = Number(v);
  if (isNaN(vn)) {
    return v as A;
  }

  return vn as A;
};

export const uiTypeToVType = (t: FormType): V.Type.FieldType => {
  switch (t) {
    case FormType.Number:
    case FormType.Select:
      return "number";
    case FormType.SelectObject:
      return "object";
    case FormType.Text:
      return "string";
  }

  throw Error("could not map UI type to V type");
};

export const generateValidatorFromDef = <A>(df: FormDef<A>[]) => {
  const v: V.Type.Shape = {};

  df.forEach((f) => {
    v[f.name as string] = {
      optional: f.optional,
      type: uiTypeToVType(f.uiType),
    };
  });

  return v;
};
