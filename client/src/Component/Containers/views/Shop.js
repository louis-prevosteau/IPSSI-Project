import React, { Component } from "react";
import AccountBar from "../common/AccountBar";
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";

class Shop extends Component {
  render() {
    return (
      <div>
        <AccountBar />
        <NavigationBar />
        <p>Shop</p>
        <Footer />
      </div>
    );
  }
}

export default Shop;
