import styles from "./Alert.module.scss";
import "../../index.scss";

import Button from "../button/Button";

export default function Alert(props) {
  return (
    <div className={styles.alert}>
      <h2 className={styles.alert__title}>{props.title}</h2>
      <p className={styles.alert__description}>{props.description}</p>
      <span className={styles.alert__actions}>
        <Button>Cancel</Button>
        {props.children}
      </span>
    </div>
  );
}
