import styles from "./AppHeader.module.scss";
import "../../index.scss";

import RisksLogo from "../../images/apps/Risks.svg";
import SafetyHubLogo from "../../images/apps/SafetyHub.svg";

const apps = {
  risks: {
    name: "Risks",
    img: RisksLogo,
  },
  safetyhub: {
    name: "Safety Hub",
    img: SafetyHubLogo,
  },
};

export default function AppHeader(props) {
  return (
    <div className={styles.appHeader}>
      <span className={styles.appLogo}>
        <img src={apps[props.app].img} />
        <h1>{apps[props.app].name}</h1>
      </span>
    </div>
  );
}
