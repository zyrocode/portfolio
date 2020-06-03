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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                </Row>
            </Container>
            </>
        );
    }
}

export default About;