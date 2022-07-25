import React from 'react';
import { useState, useEffect, useContext } from 'react';
import ItemCarrito from "./ItemCarrito";
import { CartContext } from './CarritoContext';


function Carrito() {

    const [productsLength, setProductsLength] = useState(0);
    const { cartItems } = useContext(CartContext);

    useEffect(() => {
        setProductsLength(
            cartItems.reduce((previous, current) => previous + current.amount, 0)
        );
    }, [cartItems]);

    const total = cartItems.reduce((previous, current) => previous + current.amount * current.precio, 0)

    return (
        <>
            {cartItems && (
                <div>
                    <h2>TU CARRITO</h2>
                    {cartItems.map((info, i) => (
                        <ItemCarrito key={i} prenda={info} />
                    ))}
                </div>
            )}
            <div>
                <p> precio total: { total } </p>
            </div>
        </>
    );
}

export default Carrito;