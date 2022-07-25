import React, { useEffect } from "react";
import db from "../../db.json"
import "./itemDetail.css"
import { useState } from "react";
import { useContext } from "react";
import CartContext from "../Carrito/CarritoContext";

const ItemDetail = ({ idPrenda }) => {

    const {addItemToCart} = useContext(CartContext)


    const [prenda, setPrenda] = useState({})
    const idProducto = parseInt(idPrenda)
    const [number, setNumber] = useState(0)
    const [stockHay, setStockHay] = useState(true)
    const productos = db.Ropa
    // const carrito = db.Carrito.productos

    useEffect(() => {
        productos.map((producto) => {
            if (producto.id === idProducto) {
                //console.log("entre soy igual")
                setPrenda(producto)
            }
        })
        //console.log("soy lap renda", prenda)
    }, []);

    const handleSuma = () => {
        if (number + 1 <= prenda.stock) {
            setNumber(number + 1)
        }
    }

    const handleResta = () => {
        if (number - 1 >= 0) {
            setNumber(number - 1)
        }
    }

/*      const addCarrito = () => {
        carrito.push([idProducto, number])
        //console.log("Este es el carrito ------>", carrito)
    } */
 
    return (
        <div className="container" >
            <div style={{ width: "50%"}}>
                <h2> {prenda.nombre}</h2>
                <p> Precio: {prenda.precio}$</p>
                <p> Stock: {prenda.stock}</p>
                <p> Descripcion: {prenda.descripcion}$</p>
                <br />
                <div>
                    <p> {number} </p>
                    <button type="button" onClick={handleResta} disabled={!stockHay}> minus </button>
                    <button type="button" onClick={handleSuma} disabled={!stockHay}> plus  </button>
                </div>
                <button type="button" onClick={() => {addItemToCart(prenda)}} > agregar al carrito </button>
            </div>
            <div style={{ width: "50%"}}>
                <img
                    className="remera"
                    src={prenda.imagen}
                />
            </div>
        </div>
    )
}
export default ItemDetail;