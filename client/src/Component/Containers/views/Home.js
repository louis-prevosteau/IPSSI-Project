import React, { Component } from "react";
import AccountBar from "../common/AccountBar";
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";

class Home extends React.Component {
  render() {
    return (
      <div>
        <AccountBar />
        <NavigationBar />
        <p>Home</p>
        <Footer />
      </div>
    );
  }
}

export default Home;