import styles from "./SelectInput.module.scss";
import "../../index.scss";

export default function SelectInput(props) {
  return (
    <div className={styles["selectInput"]} id={props.id}>
      <label
        className={styles["selectInput__label"]}
        htmlFor={`${props.id}__select`}
      >
        {props.label}
      </label>
      <p className={styles["selectInput__placeholder"]}>
        {props.placeholder}{" "}
        {props.example && (
          <>
            Example: <samp>{props.example}</samp>.
          </>
        )}
      </p>
      <select
        className={styles["selectInput__input"]}
        id={`${props.id}__select`}
      >
        {props.options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}
