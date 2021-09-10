export const getParamTyped = (paramType, id) => {
  if (!id) {
    throw Error("id could not be found");
  }
  if (paramType === "number") {
    const nid = Number(id);
    if (isNaN(nid)) {
      throw Error("nid is not a number");
    }
    return nid;
  }
  return id;
};
