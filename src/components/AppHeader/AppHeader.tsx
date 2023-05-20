import React from "react";

import "./AppHeader.module.scss";

import RisksLogo from "../../images/apps/RisksLogo";
import PromoLogo from "../../images/apps/PromoLogo";

const apps = {
  risks: {
    name: "Risks",
    img: RisksLogo,
  },
  aid360: {
    name: "Aid360",
    img: PromoLogo,
  },
};

interface Props {
  app: "aid360" | "risks";
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
