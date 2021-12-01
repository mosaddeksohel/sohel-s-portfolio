import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Row style={{ backgroundColor: 'black' }}>
            <Col xs={12} md={6}>
                <h3 style={{ color: 'white' }}>Address</h3>
                <p style={{ color: 'white' }}>148, Amtola, Farmgate, Dhaka, 1215</p>
            </Col>
            <Col xs={12} md={6}>
                <h3 style={{ color: 'white' }}>Follow me on</h3>
                <a style={{ margin: '5px', fontSize: '20px' }} target="blank" href="https://www.facebook.com/soohhel.tilx/"><i class="fab fa-facebook-square"></i></a>
                <a style={{ margin: '5px', fontSize: '20px' }} target="blank" href="https://github.com/tanjimsohel"><i class="fab fa-github"></i></a>
                <a style={{ margin: '5px', fontSize: '20px' }} target="blank" href="https://www.linkedin.com/in/sohel-tanjim-9859a7190/"><i class="fab fa-linkedin"></i></a>
            </Col>
            <h4 className="text-warning">All Right Reserved <span className="text-warning">&copy;</span> Sohel Rana Pramanik</h4>
        </Row>
    );
};

export default Footer;