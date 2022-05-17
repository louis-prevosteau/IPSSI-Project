import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import signOutAlt from "@iconify/icons-fa-solid/sign-out-alt";

import logo from "../../../../src/assets/img/logo.png";

import styles from "../../../css/nav.module.css";

const LogoutIcon = <Icon icon={signOutAlt} />;

export default function NavigationBar() {
  const logout = () => {};

  return (
    <>
      <Navbar className={styles.navBar}>
        <Navbar.Brand className={styles.navBrand} href="Home">
          <img src={logo} width="100vw" height="100vw" />
        </Navbar.Brand>
        {/*<Navbar.Toggle />*/}
        {/*<Navbar.Collapse>*/}
        <Nav className={styles.nav}>
          <Nav.Link className={styles.navLink} href="Home">
            Accueil
          </Nav.Link>
          <Nav.Link className={styles.navLink} href="Shop">
            Boutique
          </Nav.Link>
          <Nav.Link className={styles.navLink} href="Cart">
            Panier
          </Nav.Link>
        </Nav>
        {/*</Navbar.Collapse>*/}
      </Navbar>

      <div className={styles.header}>
        <h1>SPAZIOGAMES</h1>
        <h2>Jeux de société & Puzzles</h2>
      </div>
    </>
  );
}
