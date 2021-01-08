import React, { Component } from 'react';

class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
  
    render() {
        return (
            <div id="options">

                <form onClick={(e) => this.props.handleLogin(e)}>
                   
                    <label style={{"margin": "5px"}}>Email:</label>
                    <input id="email" type="email"></input>
                    <label>Password:</label>
                    <input id="password" type="password"></input>
                    <button id="login">Login</button>
                 
                </form>

                
            </div>
        );
    }
}

export default Options;