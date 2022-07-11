import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import AccountBar from "../common/AccountBar";
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";

import axios from "axios";

const AdminCategoryCreation = () => {
  const [productCategory, setProductCategory] = useState([]);
  const [categoryDescription, setCategoryDescription] = useState([]);


  const showCategories = () => {
    let categoryValues = ["jeux de société","jeux de rôle","jeux de dés"],
        MakeItem = function(X) {
            return <option>{X}</option>;
        };
    return <select className={"formfield"}>{categoryValues.map(MakeItem)}</select>;
}


  let history = useHistory();

  const addCategory = () => {
    if (productCategory.length == 0) {
      alert("Empty form");
      return;
    }

    let data = {
      productCategory: productCategory,
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

  return (
    <div>
      <AccountBar />
      <NavigationBar />
      <div><h3>Créer une catégorie</h3>

                {showCategories()}

                  <form className={"globalForm"}
                  onSubmit={(e) => {
                  e.preventDefault();
                  }}
  >
                  <input className={"formfield"}
                    type="text"
                    placeholder="Nouvelle catégorie"
                    value={productCategory}
                    onChange={(e) => {
                        setProductCategory(e.target.value);
                    }}
                  ></input>

                    <textarea placeholder="Description de la catégorie" value={categoryDescription} className={"formfield"} style={{height:'20vh'}} onChange={(e) => {
                      setCategoryDescription(e.target.value);
                    }}></textarea>
                    
                    <div style={{display: "flex", justifyContent: "space-evenly", width: "50vw"}}>
                        <button className={"globalGreyButton"} onClick={""}>Annuler</button>
                        <button className={"globalRedButton"} onClick={""}>Ajouter</button>
                    </div>
                    
                </form>
                </div>;
      <Footer />
    </div>
  );
};

export default AdminCategoryCreation;