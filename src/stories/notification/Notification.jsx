import styles from "./Notification.module.scss";
import "../../index.scss";

import InfoIcon from "../../images/icons/info.svg";
import StopIcon from "../../images/icons/stop.svg";
import WarningIcon from "../../images/icons/warn.svg";

export default function Notification(props) {
  var classNames = [
    styles["notification"],
    props.variant
      ? styles["notification--" + props.variant]
      : styles["notification--info"],
  ];

  return (
    <div className={classNames.join(" ")}>
      <img
        className={styles.notification__icon}
        src={
          props.variant === "info"
            ? InfoIcon
            : props.variant === "error"
            ? StopIcon
            : props.variant === "warning"
            ? WarningIcon
            : InfoIcon
        }
      />
      <span className={styles.notification__details}>
        <span className={styles["notification__title"]}>{props.title}</span>
        <p className={styles["notification__description"]}>{props.children}</p>
      </span>
    </div>
  );
}
