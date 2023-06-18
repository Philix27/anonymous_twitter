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
          subtitle: "Communicate freely",
          icon: <AiFillPhone />,
        })}
        {cardItems({
          title: "Security",
          subtitle: "All posts are completely secure.",
          icon: <AiFillSecurityScan />,
        })}
        {cardItems({
          title: "Anonymity",
          subtitle: "You have the option of being completely anonymous",
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
