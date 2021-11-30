import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import './Banner.css'
import banner from '../../images/cover.jpg'


const Banner = () => {
    return (
        <Row style={{ justifyContent: 'center' }} className="banner d-flex container mt-5">

            <Col xs={12} md={6}>
                <div style={{ marginTop: '5rem', marginLeft: '4rem' }}>
                    <h4 className="justify-content-center">Welcome, it's me <span style={{ color: 'goldenrod' }}>Sohel</span></h4>
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

                        <Button>Resume</Button>

                    </a>
                </div>
            </Col>
            <Col xs={12} md={6}>
                <img style={{ alignItems: 'center' }} src={banner} alt="" />
            </Col >

        </Row >
    );
};

export default Banner;