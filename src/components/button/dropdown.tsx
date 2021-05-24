import React from "react";

/**
 * dropdown buttons
 * @see https://getbootstrap.com/docs/4.0/components/dropdowns/#via-data-attributes
 * does not seem to work without JS plugins
 */
export default <A,>({
  label,
  options,
}: {
  label: string;
  options: { id: A; name: string }[];
}) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {label}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {options.map((op, i) => (
          <a key={i} className="dropdown-item" href="#">
            {op.name}
          </a>
        ))}
      </div>
    </div>
  );
};
