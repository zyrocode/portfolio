import React, { Component } from 'react';
import { Container, Col, Row, Button } from 'reactstrap'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class Skills extends Component {
    state = {}
    render() {
        return (
            <Container className="skills-box">
                <h1>
                    <span className="second-half p-3">STACKS</span>
                </h1>
                <Row className="mt-4">
                    <Col className="m-5 single-skill">
                        <img className="img-stack" src="https://cms-assets.tutsplus.com/uploads/users/1116/posts/24835/preview_image/mongodb-logo.png"/>
                        <h1 className="text-center pt-4">MONGO DB</h1>
                    </Col>
                    <Col className="m-5 single-skill">
                    <img className="img-stack" src="http://3.bp.blogspot.com/-PTty3CfTGnA/TpZOEjTQ_WI/AAAAAAAAAeo/KeKt_D5X2xo/s1600/js.jpg"/>
                        <h1 className="text-center pt-4">EXPRESS JS</h1>
                    </Col>
                    <Col className="m-5 single-skill">
                    <img className="img-stack" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"/>
                        <h1 className="text-center pt-4">REACT JS</h1>
                    </Col>
                    <Col className="m-5 single-skill">
                        <img className="img-stack img-wider" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"/>
                        <h1 className="text-center pt-4">NODE JS</h1>
                    </Col>
                    <Col className="m-5 single-skill ">
                    <img className="img-stack" src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"/>
                        <h1 className="text-center pt-4">REDUX</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Skills;