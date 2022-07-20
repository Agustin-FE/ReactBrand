import Item from "./Item";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ItemList = (data) => {

    const [ropa, setRopa] = useState([])


    useEffect(() => {

        const getRopa = () => {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    setRopa(data.elements)
                }, 2000)
            })
        }
        getRopa()
    }, []);

    return (
        <Row className="justify-content-md-center">
            {ropa.map((info, i) => (
                <Col md="4" mb="2" key={i}>
{/*                     <Link to={`/catalogo/${info.id}`}> */}
                        <Item prenda={info} />
{/*                     </Link> */}
                </Col>
            ))}
        </Row>
    )

}
export default ItemList;