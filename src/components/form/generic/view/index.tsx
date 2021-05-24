import React from "react";
import * as T from "../type";

const View = <A,>({
  data,
  structure,
}: {
  data: Partial<A>;
  structure: T.StructureUnit<A>[];
}) => {
  return (
    <table className={"table table-striped"}>
      <tbody>
        {structure.map((structureUnit, i) => (
          <tr key={i}>
            <td>{structureUnit.label || structureUnit.name}</td>
            <td>{data[structureUnit.name]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default View;
