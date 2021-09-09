export const getValue = (structureUnit, data, symbolIfUndefined = "-") => {
  if (structureUnit.render) {
    return structureUnit.render(data);
  }
  if (structureUnit.name in data) {
    const v = data[structureUnit.name];
    return v.toString();
  }
  return symbolIfUndefined;
};
