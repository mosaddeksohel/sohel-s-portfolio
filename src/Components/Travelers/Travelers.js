import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import products from '../../images/travelers/products.png'
import myOrders from '../../images/travelers/myOrders.png'
import addProductss from '../../images/travelers/addProducts.png'

const Travelers = () => {
    return (
        <Container>
            <Row className="mt-3">
                <Row>
                    <Col xs={12} md={4}>
                        <img src={products} alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src={myOrders} alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src={addProductss} alt="" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a target="blank" href="https://bd-turism.web.app/"><Button style={{ backgroundColor: 'skyblue', borderRadius: '5px', color: 'black', fontWeight: '700' }}>Live site</Button></a>

                    </Col>
                    <Col>
                        <a target="blank" href="https://github.com/tanjimsohel/BD-turism-Server-Site"><Button style={{ backgroundColor: 'skyblue', borderRadius: '5px', color: 'black', fontWeight: '700' }}><i class="fab fa-github"></i> GitHub: server site</Button></a>
                    </Col>
                    <Col>
                        <a target="blank" href="https://github.com/tanjimsohel/-tourism-website-client-side"><Button style={{ backgroundColor: 'skyblue', borderRadius: '5px', color: 'black', fontWeight: '700' }}><i class="fab fa-github"></i> GitHub: client site</Button></a>
                    </Col>
                </Row>
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
                            Topeak Joeblow Booster floor pump

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
        </Container>
    );
};

export default Travelers;