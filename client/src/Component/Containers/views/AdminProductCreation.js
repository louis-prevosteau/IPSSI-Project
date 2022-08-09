import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import AccountBar from "../common/AccountBar";
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";

import axios from "axios";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import Form from 'react-bootstrap/Form';

const AdminProductCreation = () => {

  const [reference, setReference] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPicture, setProductPicture] = useState([]);
  const [productCategory, setProductCategory] = useState([]);


  const showCategories = () => {
    let categoryValues = ["jeux de société","jeux de rôle","jeux de dés"],
        MakeItem = function(X) {
            return <option>{X}</option>;
        };
    return <select className={"formfield"} value={productCategory} onChange={(e) => {setProductCategory(e.target.value);}}>{categoryValues.map(MakeItem)}</select>;
  }

  let history = useHistory();

  const redirectToCatalogue = () => {
    history.push(<Popup position="right center">
                    <div>Popup content here !!</div>
                </Popup>)
  }

  const addProduct = () => {
    if (/*reference.length === 0 || */productTitle.length === 0 || productPrice.length === 0 || productDescription.length === 0 /*|| productCategory.length === 0*/) {
      alert("Empty form");
      return;
    }

    let data = {
      /*reference: reference,*/
      name: productTitle,
      price: productPrice,
      description: productDescription,
      /*file: productPicture,
      category: productCategory,*/
    };

    axios
      .put("http://127.0.0.1:3000/product/insert", data)
      .then((response) => {
        let obj = response.data;
        console.log(obj)
        history.push("/AdminCatalogue");

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
                  {/*<input className={"formfield"}
                    type="text"
                    placeholder="Référence du produit"
                    value={reference}
                    onChange={(e) => {
                      setReference(e.target.value);
                    }}
                  ></input>*/}
                  <input className={"formfield"}
                    type="text"
                    placeholder="Titre du produit"
                    value={productTitle}
                    onChange={(e) => {
                      setProductTitle(e.target.value);
                    }}
                  ></input>

                    {/*<Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Choisir une image</Form.Label>
                      <Form.Control type="file" value={productPicture} onChange={(e) => {setProductPicture(e.target.value)}}/>
                  </Form.Group>*/}
                  
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

                    {/*showCategories()*/}
                    
                    <div style={{display: "flex", justifyContent: "space-evenly", width: "50vw"}}>
                        <button className={"globalGreyButton"} onClick={redirectToCatalogue}>Annuler</button>
                        <button className={"globalRedButton"} onClick={addProduct}>Ajouter</button>
                    </div>
                    
                </form>
                </div>
      <Footer />
    </div>
  );
};

export default AdminProductCreation;