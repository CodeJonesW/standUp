import React, { Component } from 'react';

class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
  
    render() {
        return (
            <div id="options">

                <form style={{"height": "10vh"}} onClick={(e) => this.props.handleLogin(e)}>
                   
                    <label>Email:</label>
                    <input id="email" type="email"></input>
                    <label>Password:</label>
                    <input id="password" type="password"></input>
                    <button className="mybutton" id="login">Login</button>
                    <button className="mybutton">  Sign Up</button>
                </form>

                
            </div>
        );
    }
}

export default Options;