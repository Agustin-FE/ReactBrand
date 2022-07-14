import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const {id} = useParams();
    console.log("hola entre")

    const getDetail = () => {
        return new Promise((res, rej) => {
                console.log("ya pasaron 2 segundos")
            }, 2000)
        }

    getDetail()

    return(
        <ItemDetail idPrenda={id} />
    )
    
}


export default ItemDetailContainer;