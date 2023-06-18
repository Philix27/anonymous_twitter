"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { BiMenu, BiWindowClose } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Views } from "..";

interface IData {
  activeScreen: Views;
  setActiveScreen: React.Dispatch<React.SetStateAction<Views>>;
}
export default function NewsNavbar(props: IData) {
  const { setActiveScreen, activeScreen } = props;
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <h3>Unwind</h3>
          </Link>
        </div>
        <div className={styles.tabs_section}>
          <div
            onClick={() => setActiveScreen("Home")}
            className={activeScreen === "Home" ? styles.active : ""}
          >
            <p>News</p>
          </div>
          <div
            onClick={() => setActiveScreen("Profile")}
            className={activeScreen === "Profile" ? styles.active : ""}
          >
            <p>Profile</p>
          </div>
          <div
            onClick={() => setActiveScreen("Groups")}
            className={activeScreen === "Groups" ? styles.active : ""}
          >
            <p>Groups</p>
          </div>
        </div>
        <div className={styles.links}>
          <p>
            <Link href={"/login"}>Username</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
