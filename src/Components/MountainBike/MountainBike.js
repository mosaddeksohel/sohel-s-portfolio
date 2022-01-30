import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import product from '../../images/mountainBike/products.png'
import review from '../../images/mountainBike/review.png'
import myOrders from '../../images/mountainBike/myOrders.png'

const MountainBike = () => {
    return (
        <Container>
            <Row className="mt-3">
                <Row>
                    <Col xs={12} md={4}>
                        <img src={product} alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src={review} alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src={myOrders} alt="" />
                    </Col>
                </Row>
                <Col>
                    <a target="blank" href="https://mountain-bike-febe5.web.app/"><Button style={{ backgroundColor: 'skyblue', borderRadius: '5px', color: 'black', fontWeight: '700' }}>Live site</Button></a>

                </Col>
                <Col>
                    <a target="blank" href="https://github.com/tanjimsohel/mountain-bike-server-site"><Button style={{ backgroundColor: 'skyblue', borderRadius: '5px', color: 'black', fontWeight: '700' }}><i class="fab fa-github"></i> GitHub: server site</Button></a>
                </Col>
                <Col>
                    <a target="blank" href="https://github.com/tanjimsohel/mountain-bike-server-site"><Button style={{ backgroundColor: 'skyblue', borderRadius: '5px', color: 'black', fontWeight: '700' }}><i class="fab fa-github"></i> GitHub: client site</Button></a>
                </Col>
                <Row>
                    <ul style={{ textAlign: 'justify' }}>
                        <li >
                            niche Mountain Bike selling website to sell the bikes and the costumes are chosen to buy easily and load data from the server.
                        </li>
                        <li>
                            Implement to admin dashboard to monitor the CURD operation to UI.

                        </li>
                        <li>
                            Users can cancel their order and if any product is shipped to the customer then the admin can declare the product pending to be shipped & the admin can add any product.

                        </li>
                        <li>
                            Customers create their account only using email and password and Users can review their satisfaction with the product and services and implement this system using firebase.

                        </li>
                        <li>
                            Implement the CURD operation to UI.
                        </li>
                        <li>
                            Anyone can see the all offers without login. But The other CURD operation cann't see without login.
                        </li>
                        <li>
                            Users can cancel their order. If that product status is pending.
                        </li>
                        <li>
                            If any product is shipped to the customer then the admin can declare the product status pending to be shipped
                        </li>
                        <li>
                            Customers create their account only using email and password and  and implement this system using firebase.
                        </li>
                        <li>
                            Implement to login and resgister using email and password.
                        </li>
                        <li>
                            The login and registration system implement by firebase.
                        </li>
                        <li>
                            using technologies are javaScript, mongoDB, Node js, Express JS, React,
                        </li>
                        <li>
                            In design using  bootstrap, Material UI and custom css
                        </li>
                    </ul>


                </Row>
            </Row>
        </Container >
    );
};

export default MountainBike;