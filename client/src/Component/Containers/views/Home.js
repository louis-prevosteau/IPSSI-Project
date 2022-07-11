import React, { Component } from "react";
import AccountBar from "../common/AccountBar";
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";
import DemoCarousel from "../common/Carousel";
import Shop from "./Shop";

import { BsFillBasket2Fill } from 'react-icons/bs';

import { Link } from "react-router-dom";



class Home extends React.Component {
  render() {
    return (
      <div>
        <AccountBar />
        <NavigationBar />
        <h3>Bienvenue sur notre site internet !</h3>

          <DemoCarousel />

        <div style={{backgroundColor: "#002E57", width: "60%", margin: "auto", }}>

          <p style={{color: "white", fontSize: "1.5em", paddingTop: "1%", paddingBottom: "1%"}}>Commandez aujourd'hui | Livraison entre le <strong>mercredi 13</strong> et le <strong>vendredi 15 juillet</strong>.</p>

        </div>

        <Link to={"/Shop"} className={"globalButton"} style={{padding: "1%"}}>Aller à la boutique ! <BsFillBasket2Fill /></Link>

        <Footer />
      </div>
    );
  }
}

export default Home;
