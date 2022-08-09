import React, { useState } from "react";
import AccountBar from "../common/AccountBar";
import NavigationBar from "../common/NavigationBar";
import Footer from "../common/Footer";

import dummyImg from "../../../../src/assets/img/dummy_img.png";



const SingleProduct = () => {

    let [count, setCount] = useState(0);

    const incrementCount = () => {
      count = count + 1;
      setCount(count);
    }
    const decrementCount = () => {
        if (count > 0) {
            count = count - 1;
            setCount(count);
        } else {
            setCount(count);
        }
      
    }

    const userComments = [
        { id: 1, comment: 'coucou', publishDate: '10/07/2022', author: 'Lucas Chen'},
        { id: 2, comment: 'hello', publishDate: '11/07/2022', author: 'Christophe Lannou'},
        { id: 3, comment: 'salut', publishDate: '12/07/2022', author: 'Lucas Chen'},
    ];

    const product = {
        id: 1, 
        title: "titre prod", 
        image: dummyImg.src, 
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.", 
        price: '10.99', 
        status: 'En vente'
    };

    return (
      <div>
        <AccountBar />
        <NavigationBar />

        

        <div>
            <h3 className={"font-link"}>Single Product</h3>
        </div>

        <div style={{display: "flex", width:"85%",justifyContent:"center"}}>
            <div style={{}}>
                <img src={dummyImg} alt="" width="150%"/>
            </div>
            <div style={{display: "flex", flexDirection: "column", width: "50%"}}>
                <h3>{product.title}</h3>
                <h4 className={'product-price'}>{product.price} €</h4>
                <p style={{width:"50%", margin:"auto"}}>{product.description}</p>
                
                <div style={{display: "flex", alignItems:"center",justifyContent:"right"}}>
                    <button className={"cart-buttons"} onClick={decrementCount}>-</button>
                    <div className={"cart-count-field"}>{count}</div>
                    <button className={"cart-buttons"} onClick={incrementCount}>+</button>
                    <button className={"globalButton"} onClick={""}>Ajouter</button>
                </div>  
            </div>
        </div>

        <div>
            <h3 className={"productCounter"}>Commentaires</h3>
            
            <table className="table table-striped table-bordered" style={{margin: "auto",width: "75%", fontFamily: "'BoogalooRegular', cursive"}}>
                    
                    <tbody style={{backgroundColor: "white", height: "100vh"}}>
                        {userComments && userComments.map(userComments =>
                            <tr key={userComments.id} className={'adminCataloguetr'}>
                                 

                                    
                                    <tr> 
                                    <td >{userComments.comment}</td> 
                                    <td rowspan="2">écrit le {userComments.publishDate}</td> 
                                    </tr> 
                                    
                                    <tr> 
                                        <td>Publié par : {userComments.author}</td> 
                                    </tr> 

                            </tr>
                        )}
                    </tbody>
                </table>
        </div>

        <Footer />
      </div>
    );
  }

export default SingleProduct;