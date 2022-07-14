import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import CartWidget from "./CartWidget"
import "../../Css/Navbar.css"

function NavbarR() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React Brand</Navbar.Brand>
                    <Nav className='texto'>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/catalogo">Catalogo</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarR;
