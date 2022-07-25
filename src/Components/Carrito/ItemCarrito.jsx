import React, {useContext} from 'react';
import { CartContext } from './CarritoContext';
import { Link } from 'react-router-dom';
import db from "../../db.json"

function ItemCarrito({prenda}) {

    const {deleteItemToCart} = useContext(CartContext)

    return (
        <>
            <div style={{ display:"flex" }} >
                <div style={{ width: "50%" }}>
                    <p> {prenda.nombre}</p>
                    <p> precio: {prenda.precio}$</p>
                    <p> cantidad: {prenda.amount}</p>
                    <button onClick={() => {deleteItemToCart(prenda)}}> borrar </button>
                </div>
                <div style={{ width: "50%" }}>
                    <img
                        className="remera"
                        src={prenda.imagen}
                    />
                </div>
            </div>
        </>
    );
}

export default ItemCarrito;