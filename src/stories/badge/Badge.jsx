import styles from "./Badge.module.scss";
import "../../index.scss";

export default function Badge(props) {
  var classNames = [
    styles["badge"],
    props.color ? styles["badge--" + props.color] : styles["badge--surface-0"],
  ];

  return <span className={classNames.join(" ")}>{props.children}</span>;
}
