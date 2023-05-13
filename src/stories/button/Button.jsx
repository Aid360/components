import styles from "./Button.module.scss";
import "../../index.scss";

export default function Button(props) {
  var classNames = [
    styles["button"],
    props.variant
      ? styles["button--" + props.variant]
      : styles["button--primary"],
  ];

  return (
    <button className={classNames.join(" ")} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
