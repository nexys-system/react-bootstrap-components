import React from "react";
import { Link } from "react-router-dom";

import Icon from "./icon";

const LinkBtn = ({
  link,
  children,
}: {
  link: string;
  children: JSX.Element | string;
}) => (
  <Link className="float-right" to={link}>
    {children}
  </Link>
);

export const LinkAdd = ({ link }: { link: string }) => (
  <LinkBtn link={link}>
    <>
      <Icon name={"plus"} /> Add
    </>
  </LinkBtn>
);

export const LinkBack = ({ link }: { link: string }) => (
  <LinkBtn link={link}>
    <>
      <Icon name={"arrow-left"} /> Back
    </>
  </LinkBtn>
);
