import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import product from '../images/health/products.png'
import login from '../images/health/login.png'
import signup from '../images/health/signup.png'

const Health = () => {
    return (
        <Container>
            <Row className="mt-3">
                <Row>
                    <Col xs={12} md={4}>
                        <img src={product} alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src={login} alt="" />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src={signup} alt="" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a target="blank" href="https://health-care-agency-d73fa.web.app/"><Button style={{ backgroundColor: 'skyblue', borderRadius: '5px', color: 'black', fontWeight: '700' }}>Live site</Button></a>

                    </Col>

                    <Col>
                        <a target="blank" href="https://github.com/tanjimsohel/health-care-hospital-website"><Button style={{ backgroundColor: 'skyblue', borderRadius: '5px', color: 'black', fontWeight: '700' }}><i class="fab fa-github"></i> GitHub: client site</Button></a>
                    </Col>
                </Row>
                <Row>
                    <ul style={{ textAlign: 'justify' }}>
                        <li >
                            It is a health Care Hospital.
                        </li>
                        <li>
                            Implementation that a customer book an appoinment.
                        </li>
                        <li>
                            All the booking info are private. Anyone can book an appoinment using create an account or login the website.
                        </li>
                        <li>
                            Here implement two different login system. One is user create a new account and login using that the email. and another one is user automatically login using gmail id.
                        </li>
                        <li>
                            Login and registration system implement by firebase authentication.
                        </li>
                        <li>
                            using technologies are javaScript, React, react router
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

export default Health;