import React from "react";
import "../../index.scss"

import "./Notification.module.scss";

import InfoIcon from "../../images/icons/info";
import StopIcon from "../../images/icons/stop";
import WarningIcon from "../../images/icons/warn";

interface Props {
  variant?: "info" | "error" | "warning";
  title: string;
  children: React.ReactNode;
}

export default function Notification(props: Props) {
  var classNames = [
    "notification",
    props.variant ? "notification--" + props.variant : "notification--info",
  ];

  return (
    <div className={classNames.join(" ")}>
      {props.variant === "info" ? (
        <InfoIcon />
      ) : props.variant === "error" ? (
        <StopIcon />
      ) : props.variant === "warning" ? (
        <WarningIcon />
      ) : (
        <InfoIcon />
      )}
      <span className="notification__details">
        <span className="notification__title">{props.title}</span>
        <p className="notification__description">{props.children}</p>
      </span>
    </div>
  );
}
