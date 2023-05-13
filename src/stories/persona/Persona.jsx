import styles from "./Persona.module.scss";
import "../../index.scss";

export default function Persona(props) {
  return (
    <a href={props.href} className={styles.persona}>
      <img src={props.img} alt={props.name} className={styles.persona__img} />
      <span className={styles.persona__name}>{props.name}</span>
    </a>
  );
}
