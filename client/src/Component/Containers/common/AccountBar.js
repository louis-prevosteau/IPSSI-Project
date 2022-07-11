import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import { FiLogOut } from 'react-icons/fi';


import styles from "../../../css/nav.module.css";

export default function AccountBar() {
  let button = (button) => {
    const isLoggedIn = localStorage.getItem("firstName");
    if (isLoggedIn) {
      return <button>{localStorage.getItem("firstName")}</button>;
    }
    return (
      <Link to="/login" className={styles.accountBarConnection}>se connecter</Link>
    );
  };

  let logout = (logoutButton) => {
    const isLoggedIn = localStorage.getItem("firstName");
    if (isLoggedIn) {
      <Link onClick={loginAction} className={styles.accountBarConnection}>se déconnecter  <FiLogOut /></Link>
    }
    return (
      
      <Link to="/register" className={styles.accountBarConnection}>s'inscrire</Link>
    );
  };

  const loginAction = () => {
    localStorage.removeItem("firstName");
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
