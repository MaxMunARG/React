import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Logo from '../../assets/logo.svg'
import Container from 'react-bootstrap/Container';
import { CartWidget } from '../CartWidget';
import { Link } from 'react-router-dom';


export const NavBar = () => {
    const categories = ['Equipos', 'Notebooks', 'Monitores', 'Placas de Video', 'Accesorios']
    return (
        <Navbar sticky="top" expand="sm" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
            <Container>
                <Link to="/"><img src={Logo} height={35} /></Link>
                <Row>
                    <Col>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto justify-content-around flex-grow-1">
                            {categories.map(category => (
                               <Link key={category} style={{textDecoration: 'none', padding: '6px 6px', color: '#c6c6c6'}} to={`/category/${category}`}>{category}</Link>
                            ))}
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                    <Col>
                        <CartWidget />
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}
