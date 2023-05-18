import React from "react";
import "../../index.scss"

import "./AppHeader.module.scss";

import RisksLogo from "../../images/apps/Risks";
import SafetyHubLogo from "../../images/apps/SafetyHub";

const apps = {
  risks: {
    name: "Risks",
    img: RisksLogo,
  },
  safetyhub: {
    name: "Safety Hub",
    img: SafetyHubLogo,
  },
};

interface Props {
  app: "safetyhub" | "risks";
}

export default function AppHeader(props: Props) {
  return (
    <div className="appHeader">
      <span className="appLogo">
        {React.createElement(apps[props.app].img)}
        <h1>{apps[props.app].name}</h1>
      </span>
    </div>
  );
}
