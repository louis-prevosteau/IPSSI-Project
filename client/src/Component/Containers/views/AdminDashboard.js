import React, { useState, useEffect } from "react";
import axios from "axios";

import AccountBar from "../common/AccountBar";
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";


import { BsFillPencilFill } from 'react-icons/bs';

import { GrValidate } from 'react-icons/gr';
  
  

const AdminDashboard = () => {

  const [command, setCommand] = useState([]);
  const [commandsTotalAmount, setCommandsTotalAmount] = useState();

  

  let amountArray = [];

  const [orderState, setOrderState] = useState(["validée", "en préparation", "expédiée", "annulée"])


  const getData = () => {   
    axios
        .get("http://192.168.90.76:3000/product/selectAllCommands")
        .then((response) => {
        console.log(response)
        let obj = response.data.listOfCommands;
        console.log(obj)
        setCommand(obj);

        for (let i = 0; i < obj.length; i++) {
          amountArray.push(Number(obj[i].amount))
          console.log(amountArray)
        }
        const reducer = (accumulator, curr) => accumulator + curr;
        setCommandsTotalAmount(amountArray.reduce(reducer))
      
    })
};

  useEffect(() => getData(), [])


  const showOrderStatus = () => {
    

    let MakeItem = function(X) {
            return <option>{X}</option>;
        };
    return <select className={"formfield"} value={""} >{orderState.map(MakeItem)}</select>;
  }


  const updateStatus = (id) => {

    // Create an object of formData
    const formData = new FormData();
    
    // Update the formData object

    
    formData.append("state", orderState)

    axios
      .put("http://192.168.90.76:3000/product/"+ id + "/editACommand", formData)
      .then((response) => {
        let obj = response.data;
        console.log("MAJ STATUS")

      })
      .catch((error) => {
        console.log(error.response.data)
        alert(error.response);
      });
  };


 
  

  

   
    
    const creationDateFormat = (date) => {

      const timeElapsed = date;
      const today = new Date(timeElapsed);
      today.toDateString();
      return today.toString()
    }

    
    
  

    

    return (
      <div>
        <AccountBar />
        <NavigationBar />
        
        
        <div>
                <div style={{width: "100%"}}>
                    <h3>Tableau de bord administrateur</h3>
                </div>

                <div className="container">
                <h3 className={"productCounter"}>Chiffre d'affaire réalisé : {parseFloat(commandsTotalAmount).toFixed(2)} €uros</h3>
                <table className="table table-striped table-bordered" style={{margin: "auto",width: "75%", fontFamily: "'BoogalooRegular', cursive"}}>
                    <thead>
                        <tr>
                            <th>Nom du client</th>
                            <th>Date de la commande</th>
                            <th>Montant total</th>
                            <th>Status de la commande</th>
                        </tr>
                    </thead>
                    <tbody style={{backgroundColor: "white", height: "100vh"}}>
                        {command.map(command =>
                            <tr key={command._id} className={'adminCataloguetr'}>
                                <td>{command.userId}</td>
                                <td>{creationDateFormat(command.created_at)}</td>
                                <td>{command.amount} €</td>
                                <td>{showOrderStatus()} <GrValidate onClick={""} style={{margin: "auto", fontSize: "2em"}}/></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            </div>
        <Footer />
    </div>
    );
  }

export default AdminDashboard;

