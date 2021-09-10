import React from "react";

import HeadlessDelete from "./headless/delete";

const DeleteBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick} className={"btn btn-sm btn-danger"}>
      Delete
    </button>
  );
};

const DeleteGeneric = HeadlessDelete(DeleteBtn);

export default DeleteGeneric;
