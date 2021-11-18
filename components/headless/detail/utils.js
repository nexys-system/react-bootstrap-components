export const getParamTyped = (_paramType, id) => {
  if (!id) {
    throw Error("id could not be found");
  }
  return id;
};
