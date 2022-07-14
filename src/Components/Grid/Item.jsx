import React from "react";
import "../../Css/ItemList.css"

const Item = ({ prenda }) => {

    return (
        <div>
            <p> {prenda.nombre}</p>
            <p> precio: {prenda.precio}$</p>
            <img
                className="remera"
                src={prenda.imagen}
            />
            <br />
        </div>
    )
}
export default Item;