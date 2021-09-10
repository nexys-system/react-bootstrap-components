import React from "react";

import { Types } from "@nexys/core-list";

import Table from "../table";
import * as UtilsUI from "../utils-ui";

import ListLayout from "./layout";

const List = <A extends { id: number }>({
  getData,
  def,
  addLink,
  editLink,
}: {
  getData: () => Promise<A[]>;
  addLink?: string;
  editLink?: (id: number) => string;
  def: Types.Definition<A>;
}) => {
  const d: Types.DefinitionItem<A> = {
    name: "id",
    render: (x) => <UtilsUI.EditBtn link={editLink(x.id)} />,
  };

  return (
    <ListLayout
      Table={({ data }) => <Table data={data} def={[...def, d]} />}
      addLink={addLink}
      getData={getData}
    />
  );
};

export default List;
