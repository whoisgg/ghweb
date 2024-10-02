"use client";
import styles from "./style.module.scss";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, background } from "./anim";
import Nav from "./nav";
import Image from "next/image";
import LanguageComponent from "./language";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`${styles.header} ${
        !isActive ? "bg-transparent" : "bg-[#094f30]"
      } transition-colors duration-300`}
    >
      <div className={`${styles.bar} flex items-center justify-between`}>
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/images/gh_l_b_c.png"
            alt="GRUPO HIJUELAS"
            width={35}
            height={15}
            priority
            className="transform -translate-y-0.5"
          />
        </Link>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.el}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
          <div className={styles.label}>
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Close
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={opacity}
          animate={!isActive ? "open" : "closed"}
          className={styles.shopContainer}
        >
          <div className={`${styles.el}`}>
            {!isActive && <LanguageComponent />}
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={styles.background}
      ></motion.div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
}
