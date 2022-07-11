import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import AccountBar from "../common/AccountBar";
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";

import axios from "axios";
import LoginRegisterOptions from "../common/LoginRegisterOptions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lostpassword, setLostpassword] = useState(false);

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

        localStorage.setItem("firstName", obj.user.firstName);
        history.push("/");
        /*console.log(obj.user.firstName);
        console.log(obj);*/
      })
      .catch((error) => {
        alert(error);
      });
  };

  let content = "";

  const haveLostPw = event => {
    setLostpassword(true);
  };

  const haveNotLostPw = event => {
    setLostpassword(false);
  };

  

  if (lostpassword) {
    content = <div>
                <h3>Retrouvez votre mot de passe</h3>
                <form className={"globalForm"}
                onSubmit={(e) => {
                e.preventDefault();
                }}
              >
                <button className={"globalButton"} onClick={haveNotLostPw}>Retour</button>
                  <input className={"formfield"}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  ></input>
                  <button className={"globalButton"} onClick={login}>Envoyer</button>
                </form>
              </div>
    
  } else {
    content = <div>
                  <form className={"globalForm"}
                  onSubmit={(e) => {
                  e.preventDefault();
                  }}
  >
                  <LoginRegisterOptions />
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
                  <button className={"lostPasswordButton"} onClick={haveLostPw}>Mot de passe perdu ?</button>

                  <button className={"globalButton"} onClick={login}>Connexion</button>
                </form>
                </div>;
  }
  



  return (
    <div>
      <AccountBar />
      <NavigationBar />
      {content}
      <Footer />
    </div>
  );
};

export default Login;
