import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import assignment12 from '../../images/New Project.png'

const Projects = () => {
    return (
        <Container>
            <Row className="container">
                <Col xs={12} md={6}>
                    <img src={assignment12} alt="" />
                </Col >
                <Col xs={12} md={6}>
                    <p style={{ textAlign: 'left' }}>
                        ● Build a professional niche Mountain Bike selling website to sell the
                        bikes and the costumes are chosen to buy easily and load data
                        from the server. <br />
                        ● Implement to admin dashboard to monitor the CURD operation to
                        UI. <br />
                        ● Users can cancel their order and if any product is shipped to the
                        customer then the admin can declare the product pending to be
                        shipped & the admin can add any product. <br />
                        ● Customers create their account only using email and password and
                        Users can review their satisfaction with the product and services
                        and implement this system using firebase.
                    </p>
                </Col >
            </Row>
            <Row className="container">

                <Col xs={12} md={6}>
                    <p style={{ textAlign: 'left' }}>
                        ● Build a professional niche Mountain Bike selling website to sell the
                        bikes and the costumes are chosen to buy easily and load data
                        from the server. <br />
                        ● Implement to admin dashboard to monitor the CURD operation to
                        UI. <br />
                        ● Users can cancel their order and if any product is shipped to the
                        customer then the admin can declare the product pending to be
                        shipped & the admin can add any product. <br />
                        ● Customers create their account only using email and password and
                        Users can review their satisfaction with the product and services
                        and implement this system using firebase.
                    </p>
                </Col >
                <Col xs={12} md={6}>
                    <img src={assignment12} alt="" />
                </Col >
            </Row>
            <Row className="container">
                <Col xs={12} md={6}>
                    <img src={assignment12} alt="" />
                </Col >
                <Col xs={12} md={6}>
                    <p style={{ textAlign: 'left' }}>
                        ● Build a professional niche Mountain Bike selling website to sell the
                        bikes and the costumes are chosen to buy easily and load data
                        from the server. <br />
                        ● Implement to admin dashboard to monitor the CURD operation to
                        UI. <br />
                        ● Users can cancel their order and if any product is shipped to the
                        customer then the admin can declare the product pending to be
                        shipped & the admin can add any product. <br />
                        ● Customers create their account only using email and password and
                        Users can review their satisfaction with the product and services
                        and implement this system using firebase.
                    </p>
                </Col >
            </Row>
        </Container>
    );
};

export default Projects;