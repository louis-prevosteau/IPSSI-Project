import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import { FiLogOut } from 'react-icons/fi';
import { FaUserAlt } from 'react-icons/fa';


import styles from "../../../css/nav.module.css";

export default function AccountBar() {
  let button = (button) => {
    const isLoggedIn = localStorage.getItem("firstName");
    if (isLoggedIn) {
      return <Link to="/User" className={styles.accountBarConnection}><FaUserAlt style = {{marginRight: "10px"}}/>{localStorage.getItem("firstName")}</Link>
    }
    return (
      <Link to="/login" className={styles.accountBarConnection}>se connecter</Link>
    );
  };

  let logout = (logoutButton) => {
    const isLoggedIn = localStorage.getItem("firstName");
    if (isLoggedIn) {
      return (
      <Link onClick={loginAction} className={styles.accountBarConnection}><FiLogOut /> se déconnecter</Link>
      )
    }
    return (
      
      <Link to="/register" className={styles.accountBarConnection}>s'inscrire</Link>
    );
  };

  const loginAction = () => {
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
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
