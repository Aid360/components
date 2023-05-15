import styles from "./Accordion.module.scss";
import "../../index.scss";

export default function Accordion(props) {
  return (
    <details className={styles.accordion}>
      <summary className={styles.accordion__summary}>{props.title}</summary>
      <div className={styles.accordion__content}>{props.children}</div>
    </details>
  );
}
