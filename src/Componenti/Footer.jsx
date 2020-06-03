import React, { Component } from 'react';
import { Fade, Row } from 'reactstrap'

class Footer extends Component {
    state = {}
    render() {
        return (
            <Fade>
                <div className="footer">
                    <span>
                        Copyright © 2020 Designed by <a style={{fontWeight: '600', letterSpacing: '1px'}} href={window.location.origin}>Ivan Plescan</a>
                    </span>
                </div>
            </Fade>
        );
    }
}

export default Footer;