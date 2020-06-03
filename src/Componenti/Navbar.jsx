import React from 'react';
import { Col, Container, Fade, Row } from 'reactstrap'

class Navbar extends React.Component {
    state = {

    }
    render() {
        return (
            <div fluid className="navtop">
                <Row>
                    <Col className="text-center">
                        <h3>
                            <span className="align-text-top">IVAN</span>
                            <span className="align-text-bottom">PLESCAN</span>
                        </h3>
                    </Col>
                </Row>
            </div>
        );
    }

}

export default Navbar;