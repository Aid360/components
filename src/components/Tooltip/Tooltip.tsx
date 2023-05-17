import React from "react";

import "./Tooltip.module.scss";

interface Props {
  tooltip: string;
  position: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
}

export default function Tooltip(props: Props) {
  const classNames = ["tooltip__text", `tooltip__text-pos-${props.position}`];

  return (
    <span className="tooltip" role="tooltip">
      <span className="tooltip__content">{props.children}</span>
      <span className={classNames.join(" ")}>{props.tooltip}</span>
    </span>
  );
}
