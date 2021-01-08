import React, { Component } from 'react';

class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id="options">

                <form>
                    <label>Email:</label>
                    <input type="email"></input>
                    <label>Password:</label>
                    <input type="password"></input>
                    <button onClick={(e) => this.props.handleLogin(e)}>Login</button>
                </form>
            </div>
        );
    }
}

export default Options;