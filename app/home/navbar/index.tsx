import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

export default function HomeNavbar() {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <h3>Unwind</h3>
          </Link>
        </div>
        <div className={styles.links}>
          <p>
            <Link href={"/login"}>Features</Link>
          </p>
          <p>
            <Link href={"/signup"}>About</Link>
          </p>
          <p>
            <Link href={"/login"}>Login</Link>
          </p>
          <p>
            <Link href={"/signup"}>Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
