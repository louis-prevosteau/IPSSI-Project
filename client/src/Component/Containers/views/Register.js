import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import AccountBar from "../common/AccountBar";
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";
import LoginRegisterOptions from "../common/LoginRegisterOptions";

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

  let history = useHistory()

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
        history.push("/Login");
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
      <form className={"globalForm"} onSubmit={e => {e.preventDefault();}}>
      <LoginRegisterOptions />
        <div style = {{display: "flex", flexDirection: "row", justifyContent: "center", width: "50%"}}>

          <input className={"formfield"} style = {{marginRight: "0.5%"}}
            type="text"
            placeholder="Firstname"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          ></input>
          <input className={"formfield"}
            type="text"
            placeholder="Lastname"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          ></input>
        </div>
          <input className={"formfield"}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <input className={"formfield"}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        {/*<input className={"formfield"}
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        ></input>*/}
        {/*<input className={"formfield"}
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        ></input>*/}
        {/*<input className={"formfield"}
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        ></input>*/}
        {/*<input className={"formfield"}
          type="text"
          placeholder="Postal code"
          value={postalCode}
          onChange={(e) => {
            setPostalCode(e.target.value);
          }}
        ></input>*/}
        {/*<input className={"formfield"}
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        ></input>*/}

          <button className={"globalButton"} onClick={register}>S'inscrire</button>
      </form>
      <Footer />
    </div>
  );
};

export default Register;
