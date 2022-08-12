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

  const [isActive, setActive] = useState("false");

  const [loading, setLoading] = useState(false);


  let history = useHistory();
  
  
 
  const login = () => {
    if (email.length === 0 || password.length === 0) {
      alert("Empty form");
      return;
    }


    let data = {
      email: email,
      password: password,
    };

    setLoading(true);

    axios
      .post("http://192.168.90.76:3000/user/login", data)

      .then((response) => {
        let obj = response.data;
       
        localStorage.setItem("firstName", obj.user.firstName);
        localStorage.setItem("lastName", obj.user.lastName);
        localStorage.setItem("email", obj.user.email);
        localStorage.setItem("accountType", obj.user.accountType);
        history.push("/");
        setLoading(false);

      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401) {      
          setActive(true);
          setTimeout(() => {
            setActive(false);
          }, 3000);
        }
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
                <form className={"globalForm"} onSubmit={(e) => {
                  e.preventDefault();  
                }}>
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
                <form id="form1" className={"globalForm"} onSubmit={(e) => {
                  e.preventDefault();
                }}>
                  <LoginRegisterOptions />
                  <input className={`${"formfield"} ${isActive ? "field-red-alert" : ""}`}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  ></input>
                  <input className={`${"formfield"} ${isActive ? "field-red-alert" : ""}`}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  ></input>
                  <button type="submit"  value="Submit" form="form1" className={"globalButton"} onClick={login}>Connexion</button>
                  <button className={"lostPasswordButton"} onClick={haveLostPw}>Mot de passe perdu ?</button>

                  
                </form>
              </div>;
  }
  

  return (
    <div>
       {loading ? (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>) : <div>
                      <AccountBar />
                      <NavigationBar />
                      {content}
                      <Footer />
                    </div>}
    </div>
  );
};

export default Login;

