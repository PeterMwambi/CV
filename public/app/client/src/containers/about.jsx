import React from 'react';
import { Container } from 'react-bootstrap';
import WebDev from 'assets/webdev.png';
import GitHub from 'assets/github.png';
import LinkedIn from 'assets/linkedin.png';
import Twitter from 'assets/twitter.png';
import Instagram from 'assets/instagram.png';
import Facebook from 'assets/facebook.png';





const About = () => {

    const socialLinks = [
        { name: 'GitHub', icon: GitHub, url: 'https://github.com/petermwambi', username: 'PeterMwambi' },
        { name: 'LinkedIn', icon: LinkedIn, url: 'https://www.linkedin.com/in/peter-mwasagua/', username: 'peter mwasagua' },
        { name: 'X', icon: Twitter, url: 'https://x.com/mwas_petero', username: '@mwas_petero' },
        { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/peter.mwasagua/', username: 'peter.mwasagua' },
        { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/peter.mwasagua/', username: 'peter.mwasagua' },
    ]
    return (
        <section id='dpz__about'>
            <Container>
                <h1>About Me</h1>
                <div className='row pb-5'>
                    <div className='col-md-6'>
                        <p className='col-md-10 my-3'>
                            I am a full stack web developer with  5+ years of experience
                            in building scalable and efficient web applications.
                        </p>
                        <p className='col-md-10 my-3'>
                            I like to build cool stuff for the web by combining various technologies together
                        </p>
                        <p>Here are my projects, take a look.</p>
                        <a className='btn nav-button' href='#dpz__projects'>View Projects</a>
                        <h3 className='mt-5'>Lets connect on social  media</h3>
                        {/* Social Media Links */}
                        {socialLinks.map((link, index) => (
                            <div className='d-flex align-items-center my-3 ms-3' key={index}>
                                <img src={link.icon} alt={link.name} className='img-fluid icon' />
                                <a href={link.url} target='_blank' rel='noopener noreferrer' className='ms-3'>
                                    {link.username}
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="col-md-6">
                        <img src={WebDev} className="img-fluid" />
                    </div>
                </div>
            </Container>
        </section>

    )
}

export default About;