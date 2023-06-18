import React from "react";
import styles from "./styles.module.scss";
import {
  AiFillLock,
  AiFillPhone,
  AiFillProfile,
  AiFillSecurityScan,
  AiOutlineDotChart,
  AiOutlineHome,
  AiOutlineWeiboCircle,
} from "react-icons/ai";
import { BiGroup } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

export default function HomeObjectives() {
  //TODO - 6 Different objectives
  return (
    <div className={styles.container} id="objectives">
      <div className={styles.inner_container}>
        {cardItems({
          title: "Hello",
          subtitle: "Some stories from gpt",
          icon: <AiFillPhone />,
        })}
        {cardItems({
          title: "Hello",
          subtitle: "Some stories from gpt",
          icon: <AiFillSecurityScan />,
        })}
        {cardItems({
          title: "Hello",
          subtitle: "Some stories from gpt",
          icon: <AiFillLock />,
        })}
      </div>
    </div>
  );
}

function cardItems(params: {
  title: string;
  subtitle: string;
  icon: JSX.Element;
}) {
  return (
    <div className={styles.card}>
      {params.icon}
      <h3>{params.title}</h3>
      <p>{params.subtitle}</p>
    </div>
  );
}
