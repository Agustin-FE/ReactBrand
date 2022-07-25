import React from 'react';
import { useState, useEffect, useContext } from 'react';
import ItemCarrito from "./ItemCarrito";
import { CartContext } from './CarritoContext';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Carrito() {

    const { cartItems, clearCarrito } = useContext(CartContext);
    const total = cartItems.reduce((previous, current) => previous + current.amount * current.precio, 0)

    return (
        <>
            {cartItems.length > 0 && (
                <>
                    <div>
                        <h2>TU CARRITO</h2>
                        {cartItems.map((info, i) => (
                            <ItemCarrito prenda={info} key={i} />
                        ))}
                    </div>
                    <div>
                        <p> precio total: {total} </p>
                        <Link to="/compraecha">
                            <Button onClick={clearCarrito}> terminar compra</Button>
                        </Link>
                    </div>
                </>
            )}
            {cartItems.length === 0 && (
                <div>
                    <h1> No tenes ninguna prenda en el carrito</h1>
                    <Link to="/catalogo">
                        <button> Ir al catalogo</button>
                    </Link>
                </div>
            )}
        </>
    );
}

export default Carrito;