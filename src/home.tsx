import React from "react";
import { title, github } from "./config";
import { Link } from "react-router-dom";
import * as Links from "./links";

export default () => (
  <>
    <h1>{title}</h1>

    <p>Examples below</p>

    <ul>
      {Links.menus.map((menu) => {
        return (
          <li>
            <Link to={menu.link}>{menu.name}</Link>
          </li>
        );
      })}
    </ul>

    <p>
      <a href={github.url}>
        <i className="fa fa-code"></i> Source
      </a>
      &nbsp;available under MIT license. Contributions are welcome.
    </p>
  </>
);
