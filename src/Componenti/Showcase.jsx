import React, { useState } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Container,
    Col,
    Row
} from 'reactstrap';

const Showcase = (props) => {
    return (
        <Container className="about-box text-right">
            <Row>
                <Col>
                    <h1>
                        <span className="second-half p-3">PORTFOLIO</span>
                    </h1>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <Card>
                        <CardImg top width="100px" src="https://i.postimg.cc/rFQTWJgV/Cattura.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Appcademix</CardTitle>
                            <CardSubtitle>E-Learn sharing platform - Front End/Back End</CardSubtitle>
                            <CardText>I was the team leader of this project. Stack used: <br/>- MongoDB <br/>- NodeJS <br/>- ExpressJS <br/>- ReactJS</CardText>
                            <a href="https://appcademix.herokuapp.com/"><Button>Live Demo</Button></a>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardImg top width="100px" src="https://www.youthemployment.org.uk/dev/wp-content/uploads/2015/01/linkedin-career-advice-600x300.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Linkedin Mockup</CardTitle>
                            <CardSubtitle>Front End/Back End</CardSubtitle>
                            <CardText>Here is a functional mockup of the social Linkedin.</CardText>
                            <a href="https://linked-in-mockup.herokuapp.com/login"><Button >Live Demo</Button></a>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardImg top width="100px" src="https://i.postimg.cc/nhjY8nd6/FBImage.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Spotify Mockup</CardTitle>
                            <CardSubtitle>Front End</CardSubtitle>
                            <CardText>Basic Spotify mockup where you can play music from the deezer API.</CardText>
                            <a href="https://github.com/zyrocode/Spotify2.0"><Button>Repo</Button></a>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Showcase;