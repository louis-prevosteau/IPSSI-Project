import React, { Component } from "react";
import AccountBar from "../common/AccountBar";
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";

class Cart extends Component {
  render() {
    return (
      <div>
        <AccountBar />
        <NavigationBar />
        <p>Cart</p>
        <Footer />
      </div>
    );
  }
}

export default Cart;
