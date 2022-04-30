import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import AccountBar from "../common/AccountBar";
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const register = () => {
    if (firstName.length == 0 || email.length == 0 || password.length == 0) {
      alert("Empty form");
      return;
    }

    let data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      address: address,
      city: city,
      postalCode: postalCode,
      country: country,
    };

    axios
      .post("http://127.0.0.1:3000/user/register", data)
      .then((response) => {
        let obj = response.data;
        /*history.push("/Login");*/
        console.log(obj);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <AccountBar />
      <NavigationBar />
      <p>Register</p>
      <form>
        <input
          type="text"
          placeholder="Firstname"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Lastname"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        ></input>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Postal code"
          value={postalCode}
          onChange={(e) => {
            setPostalCode(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        ></input>

        <button onClick={register}></button>
      </form>
      <Footer />
    </div>
  );
};

export default Register;
