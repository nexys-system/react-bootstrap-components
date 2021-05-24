import React from "react";

import TabsWRouter from "../../components/tabs/w-router"; //"../../../components/tabs/w-router";
import WLoader from "../../components/w-loader";

import { Profile, SocialMedia } from "./type";
import * as DataService from "./data";
import Sub from "./sub";

const A = ({ detail }: { detail: Profile }) => {
  console.log("loaded AA");
  return (
    <p>
      This is A {new Date().toLocaleTimeString()} {JSON.stringify(detail)}
    </p>
  );
};
const B = () => {
  console.log("loaded B");
  return <p>This is B {new Date().toLocaleTimeString()}</p>;
};

const C = () => {
  console.log("loaded C");

  return (
    <WLoader<SocialMedia[]>
      Component={({ data }: { data: SocialMedia[] }) => (
        <Sub data={data} urlPrefix={urlPrefix + "/c"} />
      )}
      getData={DataService.getSocialMedia}
    />
  );
};

const urlPrefix = "/example/tabs";

const Main = ({ data }: { data: Profile }) => {
  const navs = [
    { label: "MyA", link: "", Component: () => <A detail={data} /> },
    { label: "Detail", Component: B },
    { label: "C", Component: C },
  ];

  return <TabsWRouter navs={navs} urlPrefix={urlPrefix} />;
};

export default () => (
  <WLoader<Profile> Component={Main} getData={DataService.getProfile} />
);
