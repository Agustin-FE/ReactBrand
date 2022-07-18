import React from 'react';
import { Link } from 'react-router-dom';
import db from "../../db.json"

function ItemCarrito({prenda}) {

    const productos = db.Ropa
    const mostrarProductos = productos[prenda[0]]

    console.log("esto es prenda",prenda)

    return (
        <div>
            <p> {mostrarProductos.nombre}</p>
            <p> precio: {mostrarProductos.precio}$</p>
            <p> cantidad: {prenda[1]}</p>
            <img
                className="remera"
                src={mostrarProductos.imagen}
            />
            <br />
        </div>
    );
}

export default ItemCarrito;