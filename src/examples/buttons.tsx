import React from "react";

import BtnGroup from "../components/button/group";
import Dropdown from "../components/button/dropdown";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default () => {
  return (
    <div>
      <BtnGroup
        onClick={async (v: number) =>
          new Promise((resolve) =>
            setTimeout(() => {
              console.log("status changed");
              resolve();
            }, 1000)
          )
        }
        selected={1}
        btns={[
          { id: 1, name: "a" },
          { id: 2, name: "b" },
        ]}
      />
      <br />
      <br />

      <Dropdown label={"fds"} options={[{ name: "fds", id: 2 }]} />
    </div>
  );
};
