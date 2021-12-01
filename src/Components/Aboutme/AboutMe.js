import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutMe = () => {
    return (

        <>

            <Container >
                <Row style={{ display: 'flex' }} className="m-2">
                    <Col >
                        <p style={{ textAlign: "justify" }}>I am <span style={{ color: 'hotpink' }}>Sohel Rana pramanik</span> a computer Science graduate. I have completed my B.Sc degree from Dhaka International University. Now I am interested at web appllication development. I have done <span style={{ color: 'hotpink' }}>5+</span> project with <span style={{ color: 'hotpink' }}>React</span> in last 4 months. I have set the goal focus career in web developemt.</p>
                    </Col>

                </Row>

            </Container>

        </>

    );
};
export default AboutMe;