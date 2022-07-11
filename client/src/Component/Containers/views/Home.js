import React, { Component, useState } from "react";
import AccountBar from "../common/AccountBar";
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
        <p>Home</p>

        <Grid
        container
        spacing={{ xs: 2, md: 3 }}
      >
        {Array.from(gridArray).map((_, index) => (
          <Grid item xs={2} key={index}>
            <Item>{gridArray[index]}</Item>
          </Grid>
        ))}
        <button
          onClick={handleClick}
        >Click</button>
      </Grid>

        <Footer />
      </div>
    );
}

export default Home;
