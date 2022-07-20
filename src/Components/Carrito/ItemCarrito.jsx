import React from 'react';
import { Link } from 'react-router-dom';
import db from "../../db.json"

function ItemCarrito({ prenda }) {

    const productos = db.Ropa
    const mostrarProductos = productos[prenda[0]]

    console.log("esto es prenda", prenda)

    return (
        <>
            <div style={{ display:"flex" }} >
                <div style={{ width: "50%" }}>
                    <p> {mostrarProductos.nombre}</p>
                    <p> precio: {mostrarProductos.precio}$</p>
                    <p> cantidad: {prenda[1]}</p>
                </div>
                <div style={{ width: "50%" }}>
                    <img
                        className="remera"
                        src={mostrarProductos.imagen}
                    />
                </div>
            </div>
        </>
    );
}

export default ItemCarrito;