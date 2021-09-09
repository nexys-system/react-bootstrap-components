import React from "react";

import * as T from "./type";

const ViewGeneric =
  <A,>(
    Layout: ({
      children,
    }: {
      children: JSX.Element | JSX.Element[];
    }) => JSX.Element,
    Row: <A>({ data, structureUnit }: T.RowProps<A>) => JSX.Element
  ) =>
  ({ data, structure }: T.ViewProps<A>) =>
    (
      <Layout>
        {structure.map((structureUnit, i) => (
          <Row structureUnit={structureUnit} data={data} key={i} />
        ))}
      </Layout>
    );

export default ViewGeneric;
