import React from 'react';
import { Container, Navbar, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/">Sohel</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="left">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link><Link to="/projects" style={{ color: 'gray', textDecoration: 'none', fontWeight: '600' }}>Projects</Link></Nav.Link>
                            <Nav.Link ><Link to="/blog" style={{ color: 'gray', textDecoration: 'none', fontWeight: '600' }}>Blog</Link></Nav.Link>
                            <Nav.Link ><Link to="/aboutme" style={{ color: 'gray', textDecoration: 'none', fontWeight: '600' }}>About me</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;