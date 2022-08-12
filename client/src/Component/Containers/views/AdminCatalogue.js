import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";


import AccountBar from "../common/AccountBar";
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";

import { IoMdAdd } from 'react-icons/io';
import { AiFillDelete } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';


import dummyImg from "../../../../src/assets/img/dummy_img.png";


const AdminCatalogue = () => {
    
    const [product, setProduct] = useState([]);


    const getData = () => {   
        axios
            .get("http://192.168.90.76:3000/product/selectAll")
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

      

      const deleteProduct = (id) => {  
        console.log(id)
        axios.delete("http://192.168.90.76:3000/product/" + id + "/delete")  
        
        .then(res => {
            console.log(res);
            console.log("this is" + res.data);
           
            history.push("/AdminCatalogue")
          })
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
                    <div>
                        <Link to= "/AddCategory" className={"globalGreenButton"}><IoMdAdd style={{fontSize: "1.2em"}}/>Créer une catégorie</Link>
                        <Link to= "/DeleteCategory" className={"globalRedButton"}><AiFillDelete style={{fontSize: "1.2em"}}/>Supprimer une catégorie</Link>
                    </div>
                    
                </div>
            </div>

            <div className="container">
                <div className={"productCounter"} style={{display: "flex", justifyContent:"space-around"}}>
                    <h3 style={{color:"white"}}>{product.length} produits</h3>
                    <Link to= "/AddProduct" className={"globalGreenButton"}><IoMdAdd style={{fontSize: "1.2em"}}/>Créer un produit</Link>
                </div>
                
                <table className="table table-striped table-bordered" style={{margin: "auto",width: "75%", fontFamily: "'BoogalooRegular', cursive"}}>
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Nom du produit</th>
                            <th>Description du produit</th>
                            <th>Catégorie</th>
                            <th>Prix</th>
                            <th>Modifier le produit</th>
                            <th>Supprimer le produit</th>
                        </tr>
                    </thead>
                    <tbody style={{backgroundColor: "white", height: "100vh"}}>
                        {product.map(product =>
                            <tr key={product.id} className={'adminCataloguetr'}>
                                <td style={{width: "20%"}}><img src={product.picture} alt="product img"></img></td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.id_category}</td>
                                <td>{product.price} €</td>
                                <td><BsFillPencilFill onClick={redirectToProductUpdate} style={{fontSize: "1.2em"}}/></td> 
                                <td><AiFillDelete onClick={() => deleteProduct(product._id)} style={{fontSize: "1.2em"}}/></td>                                 
                                
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

