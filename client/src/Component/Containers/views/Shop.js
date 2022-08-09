import React, { useState, useEffect } from "react";
import AccountBar from "../common/AccountBar";
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";

import axios from "axios";

import {Card ,Button,Row } from "react-bootstrap"; 
import SingleProduct from "./SingleProduct";

import { useHistory } from "react-router-dom";



const Shop = () => {
  
  const [product, setProduct] = useState([]);
  
  useEffect (() => {
    axios
    .get("http://127.0.0.1:3000/product/selectAll")
    .then((response) => {
      let obj = response.data;
      setProduct(obj.model)
    })
    .catch((error) => {
      alert(error);
    });
})

let history = useHistory();

const redirectToSingleProduct = () => {
  history.push("/SingleProduct")
}

    return (
      <div>
        <AccountBar />
        <NavigationBar />  

        <div>
        
          <div>
            <p className={"font-link"} style={{fontSize: "1.5em"}}>Retrouvez tous nos produits et</p>
            <p className={"font-link"} style={{fontSize: "1.5em", fontWeight: "1000", textTransform: "uppercase", color: "darkred"}}>Les Meilleures Ventes de Jeux de Société !</p>
            <p style={{fontSize: "1.5em", fontWeight: "bold", textTransform: "uppercase", color: "darkorange"}}>LES INCONTOURNABLES DU PRINTEMPS 2022 !</p>
            <p className={"font-link"} style={{fontSize: "1.2em", color: "darkgreen"}}>Les meilleures ventes depuis début Mai...</p>
            <p style={{fontStyle: "italic", textDecoration: "underline", color: "#333"}}>(Mise à jour le 15/06/2022)</p>
          </div>

          <div>
            <h3>Dans la Boutique !</h3>

                <Row md={4} style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around"}}>
                  {Array.from(product && product).map((product, i) => (
                      <Card onClick={redirectToSingleProduct} className={'productCard'}>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Img variant="top" src={product.picture} />
                        <Card.Body>
                        <Card.Text className={'product-price'}>
                            {product.price} €
                          </Card.Text>
                          <Card.Text>
                            {product.description}
                          </Card.Text>
                        <Button className={'globalButton'}variant="primary">Ajouter</Button>
                        </Card.Body>
                      </Card>
                  ))}
              </Row>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default Shop;

