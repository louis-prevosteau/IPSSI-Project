import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

import styles from "../../../css/nav.module.css";

export default function AccountBar() {
  return (
    <>
      <div className={styles.accountBar}>
        <a className={styles.accountBarConnection} href="login">
          <p>se connecter</p>
        </a>
        <a className={styles.accountBarInscription} href="register">
          <p>s'inscrire</p>
        </a>
      </div>
    </>
  );
}
