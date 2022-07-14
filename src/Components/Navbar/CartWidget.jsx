import React from 'react';
import "../../Css/CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';



function CartWidget() {


    return (
        <FontAwesomeIcon icon={faCartArrowDown} className="carrito"  />
    );
}

export default CartWidget;