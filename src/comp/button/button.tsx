import styles from "./styles.module.scss";

export function Button() {
  return (
    <div className={styles.link}>
      <input type="button" value="Join the free speakers" />
    </div>
  );
}
