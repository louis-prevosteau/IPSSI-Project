import React, { useState, useEffect } from "react";


const Cart = (item) => {

const [shoppingCart, setShoppingCart] = useState([])

useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
}, [shoppingCart])


    const addToCart = () => {
        setShoppingCart([...shoppingCart, item])

        console.log(shoppingCart)
        console.log(localStorage)
    
    
    }
addToCart();
}

export default Cart