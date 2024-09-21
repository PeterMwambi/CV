import React from 'react';
import { Container } from 'react-bootstrap';
import ProgressBarComponent from 'components/progressbar';
import AdobeIllustrator from 'assets/adobeillustrator.png';
import AdobePhotoshop from 'assets/adobephotoshop.png';
import AdobeXD from 'assets/adobexd.png';
import HTML from 'assets/html.png';
import CSS from 'assets/css.png';
import JavaScript from 'assets/javascript.png';
import ReactLogo from 'assets/react.png';
import Angular from 'assets/angular.png';
import Bootstrap from 'assets/bootstrap.png';
import Tailwind from 'assets/tailwind.png';
import Figma from 'assets/figma.png';
import Node from 'assets/node.png';
import Java from 'assets/java.png';
import GraphQL from 'assets/graphql.png';
import PHP from 'assets/php.png';
import Laravel from 'assets/laravel.png';
import MySQL from 'assets/mysql.png';
import SQL from 'assets/sql.png';
import ExpressJS from 'assets/expressjs.png';
import Postman from 'assets/postman.png';
import Xampp from 'assets/xampp.png';

const Skills = () => {
    const frontEndSkills = [
        { name: 'HTML', icon: HTML, progress: 80 },
        { name: 'CSS', icon: CSS, progress: 75 },
        { name: 'JavaScript', icon: JavaScript, progress: 85 },
        { name: 'React', icon: ReactLogo, progress: 70 },
        { name: 'Angular', icon: Angular, progress: 70 },
        { name: 'Bootstrap 5', icon: Bootstrap, progress: 75 },
        { name: 'Tailwind', icon: Tailwind, progress: 80 },
        { name: 'Figma', icon: Figma, progress: 80 },
        { name: 'Adobe XD', icon: AdobeXD, progress: 75 },
        { name: 'Adobe Illustrator', icon: AdobeIllustrator, progress: 70 },
        { name: 'Adobe Photoshop', icon: AdobePhotoshop, progress: 75 },
    ];

    const backEndSkills = [
        { name: 'Node.js', icon: Node, progress: 80 },
        { name: 'Java', icon: Java, progress: 75 },
        { name: 'GraphQL', icon: GraphQL, progress: 80 },
        { name: 'PHP', icon: PHP, progress: 75 },
        { name: 'Laravel', icon: Laravel, progress: 80 },
        { name: 'Express.js', icon: ExpressJS, progress: 80 },
        { name: 'MySQL', icon: MySQL, progress: 80 },
        { name: 'SQL', icon: SQL, progress: 75 },
        { name: 'Postman', icon: Postman, progress: 80 },
        { name: 'XAMPP', icon: Xampp, progress: 75 },
    ];

    const renderSkills = (skills) => {
        return skills.map((skill, index) => (
            <div className='col-md-6 my-3' key={index}>
                <div class="col-md-11">
                    <div className='d-flex align-items-start mb-2'>
                        {skill.icon && <img src={skill.icon} className='img-fluid icon-sm me-2' alt={skill.name} />}
                        <p>{skill.name}</p>
                    </div>
                    <ProgressBarComponent progress={skill.progress} />
                </div>
            </div>
        ));
    };

    return (
        <section id='dpz__skills'>
            <Container>
                <h1 className="text-start">My skills</h1>
                {/* Front end development section */}
                <h3 className='mt-5 mb-4 text-center'>Front end web development</h3>
                <div className='row'>
                    {renderSkills(frontEndSkills)}
                </div>

                {/* Back end development section */}
                <h3 className='mt-5 mb-4 text-center'>Back end web development</h3>
                <div className='row'>
                    {renderSkills(backEndSkills)}
                </div>
            </Container>
        </section>

    );
};

export default Skills;
