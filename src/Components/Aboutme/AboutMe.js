import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutMe = () => {
    return (


        <Container >
            <Row style={{ display: 'flex' }} className="m-2">
                <Col xs={6}>
                    <p>In a nutshell, a React developer designs and implements user-facing features for websites and applications using React. They are known as front-end developers, a sub-group of developers that manage everything that users see on their web browsers or applications</p>
                </Col>

            </Row>

        </Container>

    );
};
export default AboutMe;