import React from "react";
import "./AppHeader.module.css";

import RisksLogo from "../../images/apps/Risks.svg";
import SafetyHubLogo from "../../images/apps/SafetyHub.svg";

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
  app: 
    | "safetyhub"
    | "risks"
}

export default function AppHeader(props: Props) {
  return (
    <div className="appHeader">
      <span className="appLogo">
        <img src={apps[props.app].img} />
        <h1>{apps[props.app].name}</h1>
      </span>
    </div>
  );
}