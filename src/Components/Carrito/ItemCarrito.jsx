import React from 'react';
import { Link } from 'react-router-dom';
import db from "../../db.json"

function ItemCarrito({ prenda }) {


    console.log("esto es prenda", prenda)

    return (
        <>
            <div style={{ display:"flex" }} >
                <div style={{ width: "50%" }}>
                    <p> {prenda.nombre}</p>
                    <p> precio: {prenda.precio}$</p>
                    <p> cantidad: {prenda.amount}</p>
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