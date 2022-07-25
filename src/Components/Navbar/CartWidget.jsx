import React from 'react';
import "../../Css/CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../Carrito/CarritoContext';
import { useState, useEffect, useContext } from 'react';



function CartWidget() {

    const { cartItems } = useContext(CartContext);
    const [productsLength, setProductsLength] = useState(0);

    useEffect(() => {
        setProductsLength(
            cartItems.length
        );
    }, [cartItems]);

    return (
        <div>
            <FontAwesomeIcon icon={faCartArrowDown} className="carrito" />
            <p> {productsLength}</p>
        </div>
    );
}

export default CartWidget;