import styles from "./Button.module.scss";

export default function Button(props) {
  var classNames = [styles.button, styles[props.varriant]];

  return (
    <button className={classNames.join(" ")} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
