import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import mountain from '../../images/mountainBike/products.png'
import health from '../../images/health/products.png'
import turism from '../../images/turism.png'
import { Link } from 'react-router-dom';

const Projects = () => {
    useEffect(() => {
        AOS.init();
    });
    return (
        <>

            <Container>
                <Row className="container">
                    <h4 style={{ color: 'purple', borderRadius: '5px', fontWeight: '700' }}>My Projects</h4>
                    <Row className="my-2">
                        <Col xs={12} md={6} data-aos="flip-up">
                            <img src={mountain} alt="" />
                        </Col >
                        <Col xs={12} md={6} data-aos="flip-up">
                            <p style={{ textAlign: 'justify' }}>
                                <li>Build a professional niche Mountain Bike selling website to sell the bikes and the costumes are chosen to buy easily and load data from the server.</li>
                                <li>Implement to admin dashboard to monitor the <span style={{ color: 'hotpink' }}>CURD</span> operation to UI.</li>
                                <li>Users can cancel their order and if any product is shipped to the customer then the <span style={{ color: 'hotpink' }}>admin</span> can declare the product pending to be shipped & the admin can add any product.</li>
                                <li>Customers create their account only using <span style={{ color: 'blue' }}>email and password </span>Users can review their satisfaction with the product and services and implement this system using firebase.</li>
                            </p>
                            <Link to="mountainbike"><Button style={{ backgroundColor: 'skyblue', borderRadius: '5px', color: 'black', fontWeight: '700' }}>Project Details</Button></Link>
                        </Col >
                    </Row>
                </Row>
                <Row className="container">
                    <Row className="my-2">
                        <Col xs={12} md={6} data-aos="flip-down">
                            <p style={{ textAlign: 'justify' }}>
                                <li>Build Travelers finding website to travel the beautiful places</li>
                                <li>load data from the server</li>
                                <li>Implement to admin dashboard to monitor the CURD operation to
                                    UI.</li>
                                <li>Users can cancel their order and if any product is shipped to the
                                    customer then the admin can declare the product pending to be
                                    shipped & the admin can add any product.</li>
                                <li>Customers create their account only using email and password and
                                    Users can review their satisfaction with the product and services
                                    and implement this system using firebase.</li>
                            </p>
                            <Link to="/travelers"><Button style={{ backgroundColor: 'skyblue', borderRadius: '5px', color: 'black', fontWeight: '700' }}>Project Details</Button></Link>
                        </Col >
                        <Col xs={12} md={6} data-aos="flip-down">
                            <img src={turism} alt="" />
                        </Col>
                    </Row>
                </Row>
                <Row className="container">
                    <Row className="my-2">
                        <Col xs={12} md={6} data-aos="zoom-in-down">
                            <img src={health} alt="" />
                        </Col >
                        <Col xs={12} md={6} data-aos="zoom-in-down">
                            <p style={{ textAlign: 'justify' }}>
                                <li>Build a professional medical treatment appoinment to doctor website.</li>
                                <li>Customers create their account only using email and password with aumatically signin or logon with google account.</li>
                                <li>Technology: JavaScript, ReactJS</li>
                                <li>Design: Bootstrap, Custom CSS</li>
                                <li>Login and Registration system implement by firebase</li>
                            </p>
                            <Link to="/healthcare"><Button style={{ backgroundColor: 'skyblue', borderRadius: '5px', color: 'black', fontWeight: '700' }}>Project Details</Button></Link>
                        </Col>
                    </Row>
                </Row>

            </Container>
        </>
    );
};

export default Projects;