import React, { Component } from 'react';
import StandUp from './StandUp'
import StandUpForm from './StandUpForm'
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
                <StandUpForm />
            </div>
        );
    }
}

export default Display;