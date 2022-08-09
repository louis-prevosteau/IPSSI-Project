import React, { Component, useState } from "react";
import AccountBar from "../common/AccountBar";
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";
import DemoCarousel from "../common/Carousel";
import Shop from "./Shop";

import { BsFillBasket2Fill } from 'react-icons/bs';

import { Link } from "react-router-dom";



import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Countdown from "../common/Countdown";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Home() {
  const [gridArray, setGridArray] = useState(["1", "2", "3"]);
  const [selectedElem, setSelectedElem] = useState("");

  function handleClick(index) {
    //ça sera l'image que t'as choisi
    setSelectedElem("1")
    setGridArray(gridArray => [...gridArray, selectedElem]);
    console.log(gridArray);
  }

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

        <Countdown />

        <Footer />
      </div>
    );
}

export default Home;
