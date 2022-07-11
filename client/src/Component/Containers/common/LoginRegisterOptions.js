import React from "react";
import { NavLink } from "react-router-dom";

import { BsDashLg} from 'react-icons/bs'

export default function LoginRegisterOptions() {

        /*let activeStyle = {
          textDecoration: "none",
        };

        let nonActiveStyle = {
            textDecoration: "none",
          };*/
      
        /*let activeClassName = "underline";*/
    
        /*{"hypertextButton"}*/
  
    return (
    
        <nav style= {{width: "25%"}}>
            <ul className= {"logRegisterOpts"}>

                <li style= {{fontSize: "1.5em"}}>
                <NavLink
                    style={({isActive})=>({
                        borderBottom: isActive ? "#15b0ab solid 2px": '',
                        opacity: isActive ? 1 : ""
                    })}
                    to="/Login"
                    
                >
                    Connexion
                </NavLink>
                </li>

                <BsDashLg style={{marginTop: "1vh"}} />

                <li style= {{fontSize: "1.5em"}}>
                <NavLink
                    style={({isActive})=>({
                        borderBottom: isActive ? "#15b0ab solid 2px": '',
                        opacity: isActive ? 1 : ""
                    })}
                    to="/Register"
                >
                    Inscription
                </NavLink>
                </li>
            </ul>
        </nav>
    );
  }