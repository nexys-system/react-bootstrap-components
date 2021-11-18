import { ParamType } from "./type";

export const getParamTyped = <Id>(_paramType: ParamType, id?: string): Id => {
  if (!id) {
    throw Error("id could not be found");
  }

  /*if (paramType === "number") {
    const nid = Number(id);
    if (isNaN(nid)) {
      throw Error("nid is not a number");
    }

    return nid as any as Id;
  }*/

  return id as any as Id;
};
