import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AdeptDesignersLogo from 'assets/adeptdesignerslogo.png';
import DopeSpaLogo from 'assets/dopespa.svg';
import MiracleLogo from 'assets/miracle.png';
import TutorsPointLogo from 'assets/tutorspoint.svg';
import LuxuryBnBsLogo from 'assets/luxurybnbslogo.png';
import RMIS from 'assets/rmis.png';

const projects = [
    {
        logo: AdeptDesignersLogo,
        title: "Adept Designers",
        description: "A fashion management app that optimizes inventory, orders, and customer data, boosting efficiency, sales, and providing trend insights.",
        link: "#"
    },
    {
        logo: DopeSpaLogo,
        title: "Thee Dope Spa",
        description: "A spa and barber app that simplifies appointment booking, customer management, and payments, boosting efficiency and enhancing client satisfaction.",
        link: "#"
    },
    {
        logo: MiracleLogo,
        title: "Miracle (PHP Framework)",
        description: "A lightweight PHP framework offering fast, efficient web development with minimal resources, enhancing performance and scalability.",
        link: "#"
    },
    {
        logo: TutorsPointLogo,
        title: "Tutors Point",
        description: "An e-learning platform providing personalized courses, interactive lessons, and expert tutoring to enhance student learning and success.",
        link: "#"
    },
    {
        logo: LuxuryBnBsLogo,
        title: "Luxury BnBs",
        description: "A hotel management system that simplifies bookings and enhances customer relations for improved guest experiences and operational efficiency.",
        link: "#"
    },
    {
        logo: RMIS,
        title: "RMIS",
        description: "A real estate management system that streamlines property listings, tenant management, and transactions, enhancing efficiency and profitability.",
        link: "#"
    },
];

const logoClasses = {
    [AdeptDesignersLogo]: 'icon-lg',
    [MiracleLogo]: 'icon-x-md',
    [LuxuryBnBsLogo]: 'icon-1',
    [RMIS]: 'icon-md-1',
};

const getClassName = (logo) => logoClasses[logo] || 'icon-md';

const ProjectCard = ({ logo, title, description, link }) => (
    <Col xs={12} lg={4} md={6}>
        <Card className="mt-3">
            <Card.Body>
                <div className='d-flex justify-content-center align-items-center'>
                    <img
                        src={logo}
                        alt={title}
                        className={`img-fluid ${getClassName(logo)}`}
                    />
                </div>
                <Card.Title className='text-center mt-4'>
                    <h3>{title}</h3>
                </Card.Title>
                <Card.Text className="text-center">
                    <p>{description}</p>
                </Card.Text>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-center p-3'>
                <a href={link} className='btn nav-button' target="_blank" rel="noopener noreferrer">Tap to view</a>
            </Card.Footer>
        </Card>
    </Col>
);

const Projects = () => {
    return (
        <section id="dpz__projects">
            <Container className='pb-5'>
                <h1 className='my-4'>My Projects</h1>
                <Row className='pb-5'>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Projects;
