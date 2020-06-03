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
                <Row >
                    <Col >
                        <p>I am a MERN full-stack developer based in Turin, Italy. I went to ITIS A. Avogadro then I wanted to learn more about web tech so I joined Strive School where I grasped a lot of complex concepts and strengthen my problem solving skills.</p>
                    </Col>
                </Row>
            </Container>
            </>
        );
    }
}

export default About;