import React from "react";
import { Link } from "react-router-dom";
import { title, github } from "./config";

export default () => (
  <>
    <h1>{title}</h1>

    <p>
      <Link to={"/example"}>Examples</Link>
    </p>

    <p>
      <a href={github.url}>
        <i className="fa fa-code"></i> Source
      </a>
      &nbsp;available under MIT license. Contributions are welcome.
    </p>
  </>
);
