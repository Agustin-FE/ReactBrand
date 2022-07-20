import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import "../../Css/ItemList.css"

const Item = ({ prenda }) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" className="remera" src={prenda.imagen} />
            <Card.Body>
                <Card.Title>{prenda.nombre}</Card.Title>
                <Card.Text>
                    precio: {prenda.precio}$
                </Card.Text>
                <Link to={`/catalogo/${prenda.id}`}>
                    <Button variant="dark">Detalles</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}
export default Item;
