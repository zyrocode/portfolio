import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap'
class Contact extends Component {
    state = {}
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>
                            <span className="second-half">CONTACTS</span>
                        </h1>
                    </Col>
                </Row>
                <Row >
                    <Col >
                        <div className="contact-box">
                            <Row>
                                <Col>
                                    <span>I'm looking forward to working with you. I will be glad to answer any questions!</span>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col>
                                    <a className="link-contact" href="tel:00393277082181">
                                        <span><i class="far fa-phone-alt"></i>
                                        +39 327 708 2181
                                    </span>
                                    </a><br />
                                    <a className="link-contact" href="mailto:plescan72@outlook.it">
                                        <span><i class="far fa-at"></i>
                                            plescan72@outlook.it
                                        </span>
                                    </a>
                                </Col>
                                <Col>
                                    <a className="link-contact" href="https://www.linkedin.com/in/ivan-plescan-356871195/">
                                        <span><i class="fab fa-linkedin-in"></i>
                                        Ivan Plescan
                                    </span>
                                    </a><br />
                                    <a className="link-contact" href="https://github.com/zyrocode">
                                    <span><i class="fab fa-github"></i>
                                        zyrocode
                                    </span>
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>);
    }
}

export default Contact;