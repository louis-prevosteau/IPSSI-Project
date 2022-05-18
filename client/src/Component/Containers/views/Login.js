import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import AccountBar from "../common/AccountBar";
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";

import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const login = () => {
    if (email.length == 0 || password.length == 0) {
      alert("Empty form");
      return;
    }

    let data = {
      email: email,
      password: password,
    };

    axios
      .post("http://127.0.0.1:3000/user/login", data)
      .then((response) => {
        let obj = response.data;
        localStorage.setItem("email", email);
        history.push("/");
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
      <p>Login</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
        <button onClick={login}></button>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
