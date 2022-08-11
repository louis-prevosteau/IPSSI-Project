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

  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPicture, setProductPicture] = useState("");
  const [selectedProductCategory, setSelectedProductCategory] = useState("");
  const [categoriesId, setCategoriesId] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [listCategory, setListCategory] = useState({});

  useEffect(() => {   
    axios
    .get(" http://127.0.0.1:3000/category/selectAll")
    .then((response) => {

      setListCategory(response.data.listOfCategories);

      let categoryValuesId = []
      console.log(".")
      for (const category in listCategory) {
        for (const [key, value] of Object.entries(listCategory[category])){
          if (key === "_id") {
            console.log(response.data)
            categoryValuesId.push(value)
          }
        }
      }
      console.log(".")
      setCategoriesId(categoryValuesId)
    })
    .catch((error) => {
      alert(error);
    });

    
  }, []);
  
  const showCategories = () => {
    let categoryValues = []
    for (const category in listCategory) {
      for (const [key, value] of Object.entries(listCategory[category])){
        if (key == "name") {
          categoryValues.push(value)
        }
      }
    }
    
    let MakeItem = function(X) {
            return <option>{X}</option>;
        };
    return <select className={"formfield"} value={selectedProductCategory} onChange={(e) => {
      setSelectedProductCategory(e.target.value);
      console.log(categoriesId)
      console.log("selected id: " + categoriesId[e.target.selectedIndex])
      setSelectedCategoryId(categoriesId[e.target.selectedIndex])
    }}>{categoryValues.map(MakeItem)}</select>;
  }

  let history = useHistory();

  const redirectToCatalogue = () => {
    history.push(<Popup position="right center">
                    <div>Popup content here !!</div>
                </Popup>)
  }

  const addProduct = () => {
    if (productTitle.length === 0 || productPrice.length === 0 || productDescription.length === 0 /*|| productPicture.length === 0 || productCategory.length === 0*/) {
      alert("Empty form");
      return;
    }

    // Create an object of formData
    const formData = new FormData();
    
    // Update the formData object

    console.log(productPicture)
    
    formData.append(
      "file",
      productPicture,
      productPicture.name
    );
    
    formData.append("name", productTitle)
    formData.append("price", productPrice)
    formData.append("description", productDescription)
    formData.append("id_category", selectedCategoryId)

    axios
      .put("http://127.0.0.1:3000/product/insert", formData)
      .then((response) => {
        let obj = response.data;
        console.log(obj)
        history.push("/AdminCatalogue");

      })
      .catch((error) => {
        console.log(error.response.data)
        alert(error.response);
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

                    {showCategories()}

                    <label for="file">Choisir l'image à upload</label>
                    <input type="file" onChange={(e) => {
                        setProductPicture(e.target.files[0]);
                    }} /> 
                    
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