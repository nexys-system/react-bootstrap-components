import React from "react";

import TabsWRouter from "../../components/tabs/w-router";
import * as TT from "./type";

const CA = ({ data }: { data: TT.SocialMedia[] }) => {
  console.log("loaded CA");
  return (
    <>
      <p>This is CA {new Date().toLocaleTimeString()}</p>
      <ul>
        {data.map((d, i) => (
          <li key={i}>{d.name}</li>
        ))}
      </ul>
    </>
  );
};

const CB = () => {
  console.log("loaded CB");
  return <p>This is CB {new Date().toLocaleTimeString()}</p>;
};

export const Sub = ({
  data,
  urlPrefix,
}: {
  data: TT.SocialMedia[];
  urlPrefix: string;
}) => (
  <TabsWRouter
    navs={[
      { label: "CA", link: "", Component: () => <CA data={data} /> },
      { label: "CB", Component: CB },
    ]}
    urlPrefix={urlPrefix}
  />
);

export default Sub;
