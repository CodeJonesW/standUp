import React, { Component } from 'react';
import StandUp from './StandUp'
class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id="display">
                <p> Display</p>
                <StandUp />
            </div>
        );
    }
}

export default Display;