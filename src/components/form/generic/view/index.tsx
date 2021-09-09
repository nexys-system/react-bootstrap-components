import React from "react";
import * as ViewGeneric from "../../../headless/view";

const Row = <A,>({ data, structureUnit }: ViewGeneric.Type.RowProps<A>) => (
  <tr>
    <td>{structureUnit.label || structureUnit.name}</td>
    <td>{ViewGeneric.Utils.getValue(structureUnit, data)}</td>
  </tr>
);

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
  <table className={"table table-striped"}>
    <tbody>{children}</tbody>
  </table>
);

const View = <A,>(props: ViewGeneric.Type.ViewProps<A>) =>
  ViewGeneric.View<A>(Layout, Row)(props);

export default View;
