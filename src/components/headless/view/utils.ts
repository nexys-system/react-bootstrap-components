import * as T from "../form/type";

/**
 *
 * @param structureUnit
 * @param data
 * @param symbolIfUndefined if the value is undefined, display something, default "-"
 * @returns
 */
export const getValue = <A>(
  structureUnit: T.StructureViewUnit<A>,
  data: Partial<A>,
  symbolIfUndefined = "-"
): string => {
  if (structureUnit.render) {
    return structureUnit.render(data as A);
  }

  if (structureUnit.name in data) {
    const v = data[structureUnit.name] as any;
    return v.toString();
  }

  return symbolIfUndefined;
};
