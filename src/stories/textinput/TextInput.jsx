import styles from "./TextInput.module.scss";
import "../../index.scss";

export default function TextInput(props) {
  return (
    <div className={styles["textInput"]}>
      <label className={styles["textInput__label"]} htmlFor={props.id}>
        {props.label}
      </label>
      <p className={styles["textInput__placeholder"]}>
        {props.placeholder}{" "}
        {props.example && (
          <>
            Example: <samp>{props.example}</samp>.
          </>
        )}
      </p>
      <input
        className={styles["textInput__input"]}
        id={props.id}
        type={"text"}
      />
    </div>
  );
}
