import React, { Component } from 'react';
import { Container, Col, Row, Button } from 'reactstrap'

class Home extends Component {
    state = {}
    render() {
        return (
            <Container className="home-box">
                <h1>
                    <span className="first-half">FULL STACK</span>
                    <span className="second-half">DEVELOPER</span>
                </h1>
                <p className="mt-5">I like to translate ideas into reality!</p>
                <Button className="mt-2">
                        <a href="https://github.com/zyrocode?tab=repositories"><span className="button-text px-1">My Github Repositories</span></a>
                </Button>
            </Container>
        );
    }
}

export default Home;