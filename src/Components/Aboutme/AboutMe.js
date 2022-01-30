import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col, Container, Row } from 'react-bootstrap';

const AboutMe = () => {
    useEffect(() => {
        AOS.init();
    });
    return (

        <>

            <Container >
                <Row style={{ display: 'flex' }} className="m-2" data-aos="fade-up">
                    <Col >
                        <p style={{ textAlign: "justify" }}>I am <span style={{ color: 'hotpink' }}>Sohel Rana pramanik</span> a computer Science graduate. I have completed my B.Sc degree from Dhaka International University. Now I am interested at web appllication development. I have set the goal focus career in web developemt.</p>
                    </Col>

                </Row>
                <Row style={{ display: 'flex' }} className="m-2" data-aos="fade-up">
                    <Col className="mt-5">
                        <p style={{ textAlign: "justify" }}>
                            I am inspired when I have done my first project for academic purposes. That’s why now I am focusing my career on web application development. I am good at JavaScript, React, HTML5, CSS3, CSS frameworks like Bootstrap, Material UI, Tailwind CSS. I have done more than 5 projects using react and JavaScript. I like and enjoy developing web applications.
                        </p>
                    </Col>
                </Row>

            </Container>

        </>

    );
};
export default AboutMe;