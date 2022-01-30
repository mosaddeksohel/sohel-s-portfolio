import React from 'react';

import { Button, Row, Col, Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import './Banner.css'
import banner from '../../images/cover.jpg'



const Banner = () => {
    return (
        <Container>
            <Row style={{ justifyContent: 'center', paddingBottom: '10px', paddingTop: '10px' }} className="banner d-flex mt-5">

                <Col xs={12} md={6}>
                    <div style={{ marginTop: '5rem' }}>
                        <h4 className="justify-content-center" >Welcome, I am <span style={{ color: 'goldenrod' }}>Sohel Rana Pramanik</span></h4>
                        <h5 style={{ textAlign: 'justify' }}>MERN STACK developer and Computer Science graduate set a goal for web
                            development. I have expertise in HTML5, CSS3, Javascript, ES6, Bootstrap,
                            Material UI, Tailwind, React, Node JS, Express JS, Mongo DB.</h5>



                        <Typewriter
                            classNameName="typewriter  "
                            onInit={typewriter =>
                                typewriter
                                    .typeString(`I am Expert in <span>React</span>`)
                                    .pauseFor(1000)
                                    .deleteChars(5)
                                    .typeString(`<span>Node js</span>`)
                                    .pauseFor(1000)
                                    .deleteChars(7)
                                    .typeString(`<span>Express js</span>`)
                                    .pauseFor(1000)
                                    .deleteChars(10)
                                    .typeString(`<span>MongoDB</span>`)
                                    .pauseFor(1000)
                                    .deleteChars(7)
                                    .typeString(`<span>Material UI</span>`)
                                    .pauseFor(1000)
                                    .deleteChars(11)
                                    .typeString(`<span>React Bootstrap</span>`)
                                    .pauseFor(1000)
                                    .deleteChars(15)
                                    .typeString(`<span>Tailwind</span>`)
                                    .pauseFor(1000)
                                    .deleteChars(8)
                                    .typeString(`<span>Firebase</span>`)
                                    .pauseFor(1000)
                                    .deleteChars(8)
                                    .typeString(`<span>Full stack web development</span>`)
                                    .start()
                            }
                        />
                        <a target='blank' href="https://drive.google.com/file/d/1fcTFxv4Jm15e3o9VArdxvyHu53AwXIov/view?usp=sharing">

                            <Button style={{ backgroundColor: 'skyblue', borderRadius: '5px', color: 'black', fontWeight: '700' }}>Resume</Button>
                        </a>
                        <div>
                            <a style={{ margin: '5px', fontSize: '20px' }} target="blank" href="https://www.facebook.com/soohhel.tilx/"><i class="fab fa-facebook-square"></i></a>
                            <a style={{ margin: '5px', fontSize: '20px' }} target="blank" href="https://github.com/tanjimsohel"><i class="fab fa-github"></i></a>
                            <a style={{ margin: '5px', fontSize: '20px' }} target="blank" href="https://www.linkedin.com/in/sohel-tanjim-9859a7190/"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <img style={{ alignItems: 'center' }} src={banner} alt="" />
                </Col >

            </Row >
        </Container>
    );
};

export default Banner;