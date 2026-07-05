import styles from "./styles.module.css";
import FlickeringText from "./components/FlickeringText";

export default function GlitchHover() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <FlickeringText text="Example"/>
      </div>
    </div>
  )
}
