import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import AccountBar from "../common/AccountBar";
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";

import { IoMdAdd } from 'react-icons/io';

import dummyImg from "../../../../src/assets/img/dummy_img.png";


const AdminCatalogue = () => {
    
    const [product, setProduct] = useState([
        { id: 1, image: 'img', creationDate: '10/07/2022', reference: 'T130QD0', category: 'jeux de société', price: '10.99' , status: 'En vente' },
        { id: 2, image: 'img', creationDate: '10/07/2022', reference: 'T130QD1', category: 'jeux de rôle', price: '10.99' , status: 'Retiré de la vente' },
        { id: 3, image: 'img', creationDate: '11/07/2022', reference: 'T130QD2', category: 'jeux de rôle', price: '10.99' , status: 'En vente' },
        { id: 4, image: 'img', creationDate: '12/07/2022', reference: 'T130QD3', category: 'jeux de société', price: '10.99' , status: 'En vente' },
        { id: 5, image: 'img', creationDate: '12/07/2022', reference: 'T130QD4', category: 'jeux de dés', price: '10.99' , status: 'Retiré de la vente' }
    ]);


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
                            <th>Date de création</th>
                            <th>Référence</th>
                            <th>Catégorie</th>
                            <th>Prix</th>
                            <th>Statut</th>
                        </tr>
                    </thead>
                    <tbody style={{backgroundColor: "white", height: "100vh"}}>
                        {product && product.map(product =>
                            <tr key={product.id} className={'adminCataloguetr'} title='Modifier le produit' onClick={redirectToProductUpdate}>
                                <td style={{width: "20%"}}><img src={dummyImg} width={"50%"} alt=""></img></td>
                                <td>{product.creationDate}</td>
                                <td>{product.reference}</td>
                                <td>{product.category}</td>
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

