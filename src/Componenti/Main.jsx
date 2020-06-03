import React, { Component } from 'react';
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Stacks from './Stacks'
import { Container, Fade } from 'reactstrap'
import Footer from './Footer';
import Showcase from './Showcase';
import Contact from './Contact';

class Main extends Component {
    state = {}
    render() {
        return (
            <Fade>
                <Container fluid className="section">
                    <Navbar />
                    <Home />
                </Container>
                <Container fluid className="section">
                    <About />
                </Container>
                <Container fluid className="section">
                    <Stacks />
                </Container>
                <Container fluid className="section">
                    <Showcase />
                </Container>
                <Container fluid className="section">
                    <Contact />
                </Container>
                <Footer/>
            </Fade>
        );
    }
}

export default Main;