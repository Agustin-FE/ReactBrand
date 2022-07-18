import React, { useEffect } from "react";
import db from "../../db.json"
import { useState } from "react";

const ItemDetail = ({ idPrenda }) => {

    const [prenda, setPrenda] = useState({})
    const idProducto = parseInt(idPrenda)
    const [number, setNumber] = useState(0)
    const [mensaje, setMensaje] = useState("usted puede agregar ó restar remeras")
    const [stockHay, setStockHay] = useState(true)
    const productos = db.Ropa
    const carrito = db.Carrito.productos

    useEffect(() => {
        productos.map((producto) => {
            if (producto.id === idProducto) {
                console.log("entre soy igual")
                setPrenda(producto)
            }
        })
        console.log("soy lap renda", prenda)
    }, []);

    const handleSuma = () => {
        if (number + 1 <= prenda.stock) {
            setNumber(number + 1)
        }
        else {
            setMensaje("No se pude, superar el stock")
            setTimeout(() => {
                setMensaje("usted puede agregar ó restar remeras")
            }, 1000)
        }
    }

    const handleResta = () => {
        if (number - 1 >= 0) {
            setNumber(number - 1)
        }
        else {
            setMensaje("No se pude, no agregar remeras")
            setTimeout(() => {
                setMensaje("usted puede agregar ó restar remeras")
            }, 1000)
        }
    }

    const addCarrito = ()=> {
        carrito.push([idProducto,number])
        console.log("Este es el carrito ------>",carrito)
    }

    return (
        <div>
            <h2> {prenda.nombre}</h2>
            <p> Precio: {prenda.precio}$</p>
            <p> Stock: {prenda.stock}</p>
            <div>
                <p> {number} </p>
                <button type="button" onClick={handleResta} disabled={!stockHay}> minus </button>
                <button type="button" onClick={handleSuma} disabled={!stockHay}> plus  </button>
                <p> {mensaje} </p>
            </div>
            <p> Descripcion: {prenda.descripcion}$</p>
            <img
                className="remera"
                src={prenda.imagen}
            />
            <br />
            <button type="button" onClick={addCarrito} > agregar al carrito </button>
        </div>
    )
}
export default ItemDetail;