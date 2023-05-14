import styles from "./Tooltip.module.scss";
import "../../index.scss";

export default function Tooltip(props) {
  const classNames = [
    styles.tooltip__text,
    styles[`tooltip__text-pos-${props.position}`],
  ];

  return (
    <span className={styles.tooltip} role="tooltip" inert>
      <span className={styles.tooltip__content}>{props.children}</span>
      <span className={classNames.join(" ")}>{props.tooltip}</span>
    </span>
  );
}
