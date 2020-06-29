import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap'

class About extends Component {
    state = {}
    render() {
        return (<>
            <Container className="about-box text-right">
                <Row>
                    <Col>
                        <h1>
                            <span className="second-half p-3">ABOUT ME</span>
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img className="pic2" src="https://i.postimg.cc/QtY2p6vf/DSC02985-min.png" />
                    </Col>
                    <Col >
                        <p>Hi, I'm Ivan!
                        I'm a passionate Backend Developer with good skills in Frontend, specifically on the MERN stack.
                        I'm a Coding Nerd and that's why, while finishing my IT High School, I joined Strive School, (a High Selective Tech Academy), where I grasped a lot of complex concepts and strengthen my problem solving skills.
Actually based in Northern Italy, I can't wait to explore other destinations!</p>
                    </Col>

                </Row>
            </Container>
        </>
        );
    }
}

export default About;