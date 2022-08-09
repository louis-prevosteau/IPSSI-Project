import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Icon } from "@iconify/react";
import signOutAlt from "@iconify/icons-fa-solid/sign-out-alt";

import { Link, NavLink } from "react-router-dom";

import logo from "../../../../src/assets/img/logo.png";

import { FaUserAlt } from 'react-icons/fa';



import styles from "../../../css/nav.module.css";



const LogoutIcon = <Icon icon={signOutAlt} />;



export default function NavigationBar() {

  const logout = () => {};

  let content = "";

  let admin = true;

  if (admin) {

    content = <Navbar className={styles.navBar}>
                <Navbar.Brand className={styles.navBrand} to="Home">
                  <Link to='/'><img className={"company-logo"} src={logo} alt="" width="100vw" height="100vw" /></Link>
                </Navbar.Brand>
                {/*<Navbar.Toggle />*/}
                {/*<Navbar.Collapse>*/}
                <Nav className={styles.nav}>
                  <NavLink className={styles.navLink} to="Home"> 
                    Accueil
                  </NavLink>
                  <NavLink className={styles.navLink} to="AdminDashboard"> 
                    Tableau de bord
                  </NavLink>
                  <NavLink className={styles.navLink} to="AdminCatalogue">
                    Catalogue
                  </NavLink>
                  <NavLink className={styles.navLink} to="AddProduct">
                    Créer un produit
                  </NavLink>
                  <NavLink className={styles.navLink} to="User">
                    <FaUserAlt style = {{marginRight: "10px"}}/>Mon compte
                  </NavLink>
                </Nav>
                {/*</Navbar.Collapse>*/}
              </Navbar>;
    
  } else {

    content = <Navbar className={styles.navBar}>
                <Navbar.Brand className={styles.navBrand} to="Home">
                  <img src={logo} width="100vw" height="100vw" />
                </Navbar.Brand>
                {/*<Navbar.Toggle />*/}
                {/*<Navbar.Collapse>*/}
                <Nav className={styles.nav}>
                  <NavLink className={styles.navLink} to="Home"> 
                    Accueil
                  </NavLink>
                  <NavLink className={styles.navLink} to="Shop">
                    Boutique
                  </NavLink>
                  <NavLink className={styles.navLink} to="Cart">
                    Panier
                  </NavLink>
                  <NavLink className={styles.navLink} to="User">
                    <FaUserAlt style = {{marginRight: "10px"}}/>Mon compte
                  </NavLink>
                </Nav>
                {/*</Navbar.Collapse>*/}
              </Navbar>
      }

  return (
    <>
     {content}

      <div className = {styles.header}>
        <h1>SPAZIOGAMES</h1>
        <h2>Jeux de société & Puzzles</h2>
      </div>
    </>
  );
}

