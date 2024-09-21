import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import Logo from 'assets/logo.png'
import GitHub from 'assets/github.png'


const Footer = () => {
    return (
        <footer className="footer bg-light p-3 shadow-sm">
            <Row>
                <Col xs={12} lg={6}>
                    <div className="d-flex align-items-start">
                        <img src={Logo} className='img-fluid icon-md-1 ms-4' />
                        <span className='text-sm mt-2 mx-2'>&copy; DPZ Technologies <br />  All rights reserved</span>
                    </div>
                </Col>

                <Col xs={12} lg={6} className='d-flex flex-column flex-lg-row justify-content-end'>
                    <a className='nav-link' href='#'>About DPZ</a>
                    <a className='nav-link' href='#'>Become a Member</a>
                    <a className='nav-link' href='#'>Policies</a>
                    <a className='nav-link' href='#'><img src={GitHub} className='img-fluid icon-sm' /></a>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer;