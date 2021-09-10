import {FormType} from "./type.js";
export const getValue = (v) => {
  if (v === "" || v === void 0 || v === null) {
    return void 0;
  }
  const vn = Number(v);
  if (isNaN(vn)) {
    return v;
  }
  return vn;
};
export const uiTypeToVType = (t) => {
  switch (t) {
    case FormType.Number:
    case FormType.Select:
      return "number";
    case FormType.SelectObject:
      return "object";
    case FormType.Text:
      return "string";
    case FormType.Switch:
      return "boolean";
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
