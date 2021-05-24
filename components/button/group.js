import React from "../../_snowpack/pkg/react.js";
export default ({
  btns,
  onClick,
  selected: pSelected
}) => {
  const [selected, setSelected] = React.useState(pSelected);
  const [loading, setLoading] = React.useState(false);
  const handleClick = (v) => {
    onClick(v).then((_res) => {
      setSelected(v);
      setLoading(false);
    });
    setLoading(true);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "btn-group",
    role: "group"
  }, btns.map((btn, i) => {
    const className = "btn btn-" + (selected === btn.id ? "primary" : "secondary");
    return /* @__PURE__ */ React.createElement("button", {
      disabled: loading,
      key: i,
      type: "button",
      className,
      onClick: () => handleClick(btn.id)
    }, btn.name);
  }));
};
