import React, { useState } from "react";
import AccountBar from "../common/AccountBar";
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";

import dummyImg from "../../../../src/assets/img/dummy_img.png";


import {Card ,Button,Row,Col } from "react-bootstrap"; 
import AdminProductCreation from "./AdminProductCreation";
import SingleProduct from "./SingleProduct";


const Shop = () => {


  const [product, setProduct] = useState([
    { id: 1, title: "titre prod", image: dummyImg.src, description: 'lorem ipsum', price: '10.99' , status: 'En vente' },
    { id: 2, title: "titre prod", image: "..\assets\img\dummy_img.png", description: 'lorem ipsum', price: '10.99' , status: 'Retiré de la vente' },
    { id: 3, title: "titre prod", image: "..\assets\img\dummy_img.png", description: 'lorem ipsum', price: '10.99' , status: 'En vente' },
    { id: 4, title: "titre prod", image: "..\assets\img\dummy_img.png", description: 'lorem ipsum', price: '10.99' , status: 'En vente' },
    { id: 5, title: "titre prod", image: "..\assets\img\dummy_img.png", description: 'lorem ipsum', price: '10.99' , status: 'Retiré de la vente' }
]);

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

            {product && product.map(product =>     

                              <Row xs={1} md={3} className="g-4">
                                {Array.from({ length: 2 }).map((_, idx) => (
                                  <Col>
                                    <Card onClick={SingleProduct} className={'productCard'}>
                                      <Card.Title>{product.title}</Card.Title>
                                      <Card.Img variant="top" src={dummyImg} />
                                      <Card.Body>
                                      <Card.Text>
                                          {product.price} €
                                        </Card.Text>
                                        <Card.Text>
                                          {product.description}
                                        </Card.Text>
                                      <Button className={'globalButton'}variant="primary">Ajouter</Button>
                                      </Card.Body>
                                    </Card>
                                  </Col>
                                ))}
                              </Row>
              )}

          </div>

        </div>

        <Footer />
      </div>
    );
  }

export default Shop;

