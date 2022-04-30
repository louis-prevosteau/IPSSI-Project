import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

import logo from "../../../../src/assets/img/logo.png";

import styles from "../../../css/nav.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p className={styles.legalmentions}>mentions légales</p>
        <a>
          <p>copyright | 2022 SpazioGame</p>
        </a>
        <img src={logo} width="100vw" height="100vw" />
      </footer>
    </>
  );
}
