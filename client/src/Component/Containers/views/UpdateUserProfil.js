import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


import axios from "axios";

import AccountBar from "../common/AccountBar";
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";

const UpdateUserProfil = () => {
    const [pseudo, setPseudo] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);


    useEffect(() => {
      if (isCPasswordDirty) {
          if (password === confirmPassword) {
              setShowErrorMessage(false);
          } else {
              setShowErrorMessage(true)
          }
      }
  }, [confirmPassword])

  const handleCPassword = (e) => {
      setConfirmPassword(e.target.value);
      setIsCPasswordDirty(true);
  }

  let history = useHistory()


  const updateProfil = () => {
    if (pseudo.length === 0 || firstName.length === 0 || lastName.length === 0 || email.length === 0) {
        alert("Vous n'avez pas rempli tous les champs !");
        return;
      }

    let data = {
        pseudo: pseudo,
        firstName: firstName,
        lastName: lastName,
        email: email,
    };

    axios
      .post("http://127.0.0.1:3000/user/login", data)
      .then((response) => {
        let obj = response.data;

        localStorage.setItem("firstName", obj.user.firstName);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const updatePassword = () => {
    if (password.length === 0 || confirmPassword.length === 0) {
        
        alert("Vous n'avez pas rempli tous les champs !");
        return;
      }

    let data = {
        password: password,
        confirmPassword: confirmPassword,
    };

    axios
      .post("http://127.0.0.1:3000/user/login", data)
      .then((response) => {
        let obj = response.data;

        localStorage.setItem("firstName", obj.user.firstName);
        history.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };


  return (
    <div>
      <AccountBar />
      <NavigationBar />
      <h3>Modifier votre profil</h3>

      <div>
        <form className={"globalForm"}
                  onSubmit={(e) => {
                  e.preventDefault();
                  }}
  >
            <input className={"formfield"}
                type="text"
                placeholder="Pseudo"
                value={pseudo}
                onChange={(e) => {
                    setPseudo(e.target.value);
                }}
            ></input>

            <input className={"formfield"}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
            setEmail(e.target.value);
            }}
            ></input>

            <div style = {{display: "flex", flexDirection: "row", justifyContent: "center", width: "47.5%"}}>

                <input className={"formfield"} style = {{marginRight: "0.5%"}}
                type="text"
                placeholder="Prenom"
                value={firstName}
                onChange={(e) => {
                    setFirstName(e.target.value);
                }}
                ></input>
                <input className={"formfield"}
                type="text"
                placeholder="Nom"
                value={lastName}
                onChange={(e) => {
                    setLastName(e.target.value);
                }}
                ></input>
            </div>

                  <button className={"globalButton"} onClick={updateProfil}>Mettre à jour</button>
                </form>
        
      </div>  


      <h3>Modifier votre mot de passe</h3>

      <div>
        <form className={"globalForm"}
                  onSubmit={(e) => {
                  e.preventDefault();
                  }}
        >

            {showErrorMessage && isCPasswordDirty ? <div style={{color: "darkred"}}> Les mots de passe ne sont pas les mêmes ! </div> : ''}
            <div style = {{display: "flex", flexDirection: "row", justifyContent: "center", width: "47.5%"}}>

                <input className={"formfield"} style = {{marginRight: "0.5%"}}
                type="password"
                name="password"
                placeholder="nouveau mot de passe"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                ></input>
                
                <input className={"formfield"}
                type="password"
                name="password"
                placeholder="confirmer votre mot de passe"
                value={confirmPassword}
                onChange={handleCPassword}
                ></input>
                
            </div>
                  <button className={"globalButton"} onClick={updatePassword}>Mettre à jour</button>
                </form>
        
      </div>  
    
      <Footer />
    </div>

    
  );
};

export default UpdateUserProfil;