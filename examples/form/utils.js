import * as T from "./type.js";
export const uiTypeToVType = (t) => {
  switch (t) {
    case T.FormType.Number:
    case T.FormType.Select:
      return "number";
    case T.FormType.Text:
      return "string";
  }
};
export const generateValidatorFromDef = (df) => {
  const v = {};
  df.forEach((f) => {
    v[f.name] = {
      optional: f.optional,
      type: uiTypeToVType(f.uiType)
    };
  });
  return v;
};
