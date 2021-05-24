import React from "react";
import { BtnBack } from "../components/button/actions";

const Layout = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element;
}) => (
  <>
    <h1>{title}</h1>
    <div>{children}</div>
    <hr />
    <p>
      <BtnBack link={"/example"} />
    </p>
  </>
);

export default Layout;
