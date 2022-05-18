import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

import styles from "../../../css/nav.module.css";

export default function AccountBar() {
  let button = (button) => {
    const isLoggedIn = localStorage.getItem("email");
    if (isLoggedIn) {
      return <button>{localStorage.getItem("email")}</button>;
    }
    return (
      <button className={styles.accountBarConnection} href="login">
        se connecter
      </button>
    );
  };

  let logout = (logoutButton) => {
    const isLoggedIn = localStorage.getItem("email");
    if (isLoggedIn) {
      return <button onClick={loginAction}>se déconnecter</button>;
    }
    return (
      <button className={styles.accountBarConnection} href="login">
        s'inscrire
      </button>
    );
  };

  const loginAction = () => {
    console.log("Hello");
    localStorage.removeItem("email");
    window.location.reload(false);
  };

  return (
    <>
      <div className={styles.accountBar}>
        {button()}
        {logout()}
      </div>
    </>
  );
}
