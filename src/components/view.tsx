import React from "react";
import { ViewField } from "./headless/view/type";

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
