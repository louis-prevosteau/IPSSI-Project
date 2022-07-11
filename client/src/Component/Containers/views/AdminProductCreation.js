import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import AccountBar from "../common/AccountBar";
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";

import axios from "axios";

const AdminProductCreation = () => {
  const [reference, setReference] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPicture, setProductPicture] = useState([]);
  const [productPictureURLs, setProductPictureURLs] = useState([]);
  const [productCategory, setProductCategory] = useState([]);


  const showCategories = () => {
    let categoryValues = ["jeux de société","jeux de rôle","jeux de dés"],
        MakeItem = function(X) {
            return <option>{X}</option>;
        };
    return <select className={"formfield"} value={productCategory} onChange={(e) => {setProductCategory(e.target.value);}}>{categoryValues.map(MakeItem)}</select>;
}





  let history = useHistory();

  const addProduct = () => {
    if (reference.length == 0 || productTitle.length == 0 || productPrice.length == 0 || productDescription.length == 0 || productPicture.length == 0 || productCategory.length == 0) {
      alert("Empty form");
      return;
    }

    let data = {
      reference: reference,
      productTitle: productTitle,
      productPrice: productPrice,
      productDescription: productDescription,
      productPicture: productPicture,
      productPictureURLs: productPictureURLs,
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
      <div><h3>Créer un produit</h3>
                  <form className={"globalForm"}
                  onSubmit={(e) => {
                  e.preventDefault();
                  }}
  >
                  <input className={"formfield"}
                    type="text"
                    placeholder="Référence du produit"
                    value={reference}
                    onChange={(e) => {
                      setReference(e.target.value);
                    }}
                  ></input>

                  <input className={"formfield"}
                    type="text"
                    placeholder="Titre du produit"
                    value={productTitle}
                    onChange={(e) => {
                      setProductTitle(e.target.value);
                    }}
                  ></input>

                    <input type="file" multiple accept="image/*" value={productPicture} onChange={(e) => setProductPicture(e.target.files[0])} />
                    <img src={productPictureURLs} alt=""/>

                  <input className={"formfield"} style={{width: "8%", marginRight: "22%"}}
                    type="number"
                    placeholder="Prix du produit"
                    value={productPrice}
                    onChange={(e) => {
                      setProductPrice(e.target.value);
                    }}
                  ></input>

                    <textarea className={"formfield"} placeholder="Description du produit" value={productDescription}  style={{height:'20vh'}} onChange={(e) => {
                      setProductDescription(e.target.value);
                    }}></textarea>

                    {showCategories()}
                    
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

export default AdminProductCreation;