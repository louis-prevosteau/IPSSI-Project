import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";


import axios from "axios";

import { FaPen } from 'react-icons/fa';

import AccountBar from "../common/AccountBar";
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";
import UpdateUserProfil from "./UpdateUserProfil";

const UserProfil = () => {
    const [pseudo, setPseudo] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  let history = useHistory()


  return (
    <div>
      <AccountBar />
      <NavigationBar />
      <h3>Votre profil</h3>

      <div style={{display: "block", margin: "auto", width: "30%", textAlign: "left", backgroundColor: "white", color: "#222", fontStyle:"italic",  padding: "3vw", borderRadius: "15px"}}>
        <div>
          <p>My pseudo : {pseudo}</p>
          <p>My Firstname : {firstName}</p>
          <p>My Lastname : {lastName}</p>
          <p>My Email : {email}</p>
        </div>
        
        <Link title='Modifier les informations de votre profil' to= "/UpdateProfil" className={"globalButton"} style={{borderRadius: "90px", width:"75px", height:"75px", float:"right", marginTop: "-20%"}}><FaPen style= {{fontSize:"2em", marginLeft: "1vw", marginTop: "1vw"}}/></Link>
      </div>  
    
          
      <Footer />
    </div>
  );
};

export default UserProfil;
