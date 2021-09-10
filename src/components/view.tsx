import React from "react";

export type ViewValue<A> = keyof A | ((d: A) => string);

export type ViewField<A> = [string, ViewValue<A>];

const View =
  <A,>(fields: ViewField<A>[]) =>
  ({ data }: { data: A }) =>
    (
      <table className={"table table-striped"}>
        <tbody>
          {fields.map(([k, v], i) => (
            <tr key={i}>
              <td>{k}</td>
              <td>{typeof v === "function" ? v(data) : data[v]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

export default View;
