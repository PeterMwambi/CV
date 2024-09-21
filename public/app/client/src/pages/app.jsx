import React from 'react'
import Header from 'containers/header'
import Footer from 'containers/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import favicon from 'assets/favicon.ico'
import 'css/style.css'
import Skills from 'containers/skills';
import About from 'containers/about';
import Projects from 'containers/projects';


/**
 * Create Favicon
 */
const link = document.createElement('link');

const linkAttributes = {
    rel: 'icon',
    type: 'image/x-icon',
    href: favicon
}

for (let x in linkAttributes) {
    link.setAttribute(x, linkAttributes[x]);
}

const head = document.querySelector('head');

head.appendChild(link);

/**
 * Create App entry point
 * @returns 
 */

const App = () => {
    return (
        <div className="CV">
            <Header />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </div>
    )
}

export default App;
