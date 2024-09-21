import React, { useEffect, useRef, useState } from "react"
import { Container } from "react-bootstrap";
import TypingSimulator from "modules/typingsimulator";


const HeaderBody = () => {
    const simulateKeypressRef = useRef(null); // Create a ref for the simulate-keypress element
    const [isTyping, setIsTyping] = useState(true); // Track if typing is still in progress
    useEffect(() => {
        const text = `How can I help you today?`;

        if (simulateKeypressRef.current) {
            const simulator = new TypingSimulator(
                text,
                100,
                simulateKeypressRef.current,
                () => {
                    setIsTyping(false) // Set typing to false when typing is finished
                    setTimeout(() => {
                        simulator.reset(); // Reset the simulator after 3 seconds
                        setIsTyping(true); // Start typing again
                        simulator.start();
                    }, 4000); // 4 second delay before restarting
                }
            );
            simulator.start();
        }
    }, []);

    return (
        <Container>
            <div className="body row mx-3">
                <div className="col-md-6">
                    <h1>Full stack Web Developer</h1>
                    <h3 className="mb-3">Effortless Design, Powerful Performance</h3>
                    <div className="keypress-simulator">
                        <p>Hi there! I'm Peter Mwambi, a full-stack web developer
                            passionate about building dynamic, and interactive web applications.</p>
                        <p ref={simulateKeypressRef}></p>
                        <div className="row flex-column flex-lg-row align-items-center my-3">
                            <a className="btn nav-button col-lg-3 mb-3" href="#dpz__skills">My Skills</a>
                            <a className="btn nav-button col-lg-3 mb-3" href="#dpz__projects">My Projects</a>
                            <a className="btn nav-button col-lg-3 mb-3" href="#dpz__about">About Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default HeaderBody;