"use client";
import styles from "./style.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./Body";
import Footer from "./Footer";

const links = [
  {
    title: "Home",
    href: "/",
    src: "home.png",
  },
  {
    title: `Products & Services`,
    href: "/products-and-services",
    src: "shop.png",
  },
  {
    title: "Contact",
    href: "/contact",
    src: "contact.png",
  },
];

export default function Index() {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <Footer />
        </div>
      </div>
    </motion.div>
  );
}
