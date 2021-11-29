import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/">Sohel</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Button className="bg-dark text-white">About</Button>
                        <Button className="bg-dark text-white">Projects</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;