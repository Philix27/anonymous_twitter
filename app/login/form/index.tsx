import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

export default function LoginComps() {
  return (
    <section className={styles.container}>
      <div className={styles.inner_container}>
        <div></div>
        <div>
          <form>
            <input type="text" placeholder="" />
          </form>
        </div>
      </div>
    </section>
  );
}
