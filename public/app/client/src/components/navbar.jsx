import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from 'assets/logo.png';

const MainNavigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar expand="lg" className={`fixed-top ${isScrolled ? 'bg-light shadow-sm' : 'bg-transparent'}`} style={{ transition: 'background-color 0.3s ease' }}>
            <Container fluid className="mx-3">
                <Navbar.Brand href="">
                    <img src={logo} className="img-fluid dpz__logo" alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="dpz__navbar" />
                <Navbar.Collapse id="dpz__navbar">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" className="mx-md-4">Home</Nav.Link>
                        <Nav.Link href="#dpz__skills" className="mx-md-4">My Skills</Nav.Link>
                        <Nav.Link href="#dpz__projects" className="mx-md-4">My Projects</Nav.Link>
                        <Nav.Link href="#dpz__about" className="mx-md-4">About Me</Nav.Link>
                        <Nav.Link href="" className="cta-button btn">Lets get intouch</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export { MainNavigation };



