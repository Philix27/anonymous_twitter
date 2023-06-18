"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";
import {
  AiFillTwitterSquare,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillHome,
} from "react-icons/ai";

export default function LoginComps() {
  const router = useRouter();
  return (
    <section className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.section_img}>
          <img src="./images/world.png" alt="hero_img" />
        </div>
        <div className={styles.social_links}>
          <div className={styles.heading}>
            <div
              className={styles.go_back}
              onClick={() => {
                router.push("/");
              }}
            >
              <AiFillHome />
              <p>Go back to home page</p>
            </div>
            <h1>Sign in with any of these social media providers.</h1>
          </div>
          <div className={styles.links}>
            <p>Twitter</p>
            <AiFillTwitterSquare />
          </div>
          <div className={styles.links}>
            <p>Instagram</p>
            <AiFillInstagram />
          </div>
          <div className={styles.links}>
            <p>Facebook</p>
            <AiFillFacebook />
          </div>
        </div>
      </div>
    </section>
  );
}
