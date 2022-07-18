import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import db from "../../db.json"
import ItemCarrito from "./ItemCarrito"

function Carrito() {

    const carrito = db.Carrito.productos
    const productos= db.Ropa
    let [totalCarrito, setTotalCarrito] = useState(0);

    useEffect(() => {
        carrito.map((info) => {
            const id = info[0]
            const producto = productos[id]
            setTotalCarrito(totalCarrito + (info[1] * (producto.precio)))
        } )
    }, []);

    return (
        <>
            <div>
                {carrito.map((info, i) => (
                    <div key={i}>
                        <ItemCarrito prenda={info} />
                    </div>
                ))}
            </div>
            <div>
                <p> precio total: {totalCarrito} </p>
            </div>
        </>
    );
}

export default Carrito;
