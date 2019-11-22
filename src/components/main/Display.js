import React, { Component } from 'react';

class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id="display">
                <p>standUp Display</p>
                <div id="standUp">
                    Text box
                </div>
            </div>
        );
    }
}

export default Options;