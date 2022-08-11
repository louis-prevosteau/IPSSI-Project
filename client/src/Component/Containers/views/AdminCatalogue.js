import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";


import AccountBar from "../common/AccountBar";
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";

import { IoMdAdd } from 'react-icons/io';

import dummyImg from "../../../../src/assets/img/dummy_img.png";


const AdminCatalogue = () => {
    
    const [product, setProduct] = useState([]);


    const getData = () => {   
        axios
            .get("http://127.0.0.1:3000/product/selectAll")
            .then((response) => {
            console.log(response)
            let obj = response.data.model;
            setProduct(obj);
        })
    };

      useEffect(() => getData(), [])
    
    
        
    let history = useHistory();

    const redirectToProductUpdate = () => {
        history.push("/AddProduct")
      }

    return (
      <div>
        <AccountBar />
        <NavigationBar />
        

        <div>

            <div style={{display: "flex", marginTop:"2%", alignItems:"center"}}>
                <div style={{width: "100%"}}>
                    <h3>Catalogue des produits</h3>
                </div>
                <div style={{display: "flex", flexDirection:"column", alignItems: "inherit", width: "100%"}}>
                    <Link to= "/AddProduct" className={"globalRedButton"}><IoMdAdd style={{fontSize: "1.2em"}}/>Créer un produit</Link>
                    <Link to= "/AddCategory" className={"globalGreenButton"}><IoMdAdd style={{fontSize: "1.2em"}}/>Créer une catégorie</Link>
                </div>
            </div>

            <div className="container">
                <h3 className={"productCounter"}>5 produits</h3>
                <table className="table table-striped table-bordered" style={{margin: "auto",width: "75%", fontFamily: "'BoogalooRegular', cursive"}}>
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Nom du produit</th>
                            <th>Description du produit</th>
                            <th>Catégorie</th>
                            <th>Prix</th>
                            <th>Statut</th>
                        </tr>
                    </thead>
                    <tbody style={{backgroundColor: "white", height: "100vh"}}>
                        {product.map(product =>
                            <tr key={product.id} className={'adminCataloguetr'} title='Modifier le produit' onClick={redirectToProductUpdate}>
                                <td style={{width: "20%"}}><img src="C:\\Users\\chris\\SpazioGame\\IPSSI-Project\\server-node\\uploads\\file-1660202654987.png"/></td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.id_category}</td>
                                <td>{product.price} €</td>
                                <td>{product.status}</td>                                 
                                
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

export default AdminCatalogue;

