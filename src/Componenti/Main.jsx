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
            <Fade className="parallax">
                <div className="parallax__layer parallax__layer--back">
                </div>
                <div className="parallax__layer parallax__layer--base">
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
                    <Footer />
                </div>
            </Fade>
        );
    }
}

export default Main;