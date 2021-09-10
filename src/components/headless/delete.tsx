import React from "react";
import { useHistory } from "react-router-dom";

const confirmPromptMessageDefault = "Are you sure you would like to delete?";

const DeleteHeadless =
  (DeleteBtn: ({ onClick }: { onClick: () => void }) => JSX.Element) =>
  <Id,>(
    deleteById: (id: Id) => void,
    redirectUrl: string,
    confirmPromptMessage: string = confirmPromptMessageDefault
  ) =>
  ({ id }: { id: Id }) => {
    const history = useHistory();

    const handleDelete = () => {
      if (confirm(confirmPromptMessage)) {
        deleteById(id);
        history.push(redirectUrl);
      }
    };

    return <DeleteBtn onClick={handleDelete} />;
  };

export default DeleteHeadless;
