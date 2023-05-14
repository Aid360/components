import styles from "./Button.module.scss";
import "../../index.scss";

export default function Button(props) {
  var classNames = [
    styles["button"],
    props.color
      ? styles["button--" + props.color]
      : styles["button--surface-0"],
  ];

  return (
    <button className={classNames.join(" ")} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
