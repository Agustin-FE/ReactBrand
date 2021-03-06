import React from 'react';
import { useState, createContext, useEffect } from 'react';
/* import db from "../../db.json"
import ItemCarrito from "./ItemCarrito" */

export const CartContext = createContext();

function CartProvider( {children}) {

    const [cartItems, setCartItems] = useState(() => {
        try {
            const productosEnLocalStorage = localStorage.getItem("cartProducts");
            return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
        }
        catch (error) {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartItems))
    }, [cartItems]);

    const addItemToCart = (product, cant) => {

        setCartItems([...cartItems, {...product, amount: cant}])
    }

    const deleteItemToCart = (product) => {

        const inCart = cartItems.filter(
            (productInCart) => productInCart !== product
        ); 

        setCartItems(
            inCart
        )  
    }

    const clearCarrito = () => {
        localStorage.removeItem("cartProducts");
    }

    return(
        <CartContext.Provider value={{cartItems, addItemToCart, deleteItemToCart, clearCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
