import React, { Component } from 'react';

class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signUp: false
        }
    }
  
    render() {
        if(!this.props.signUp){
            return (
                <div id="options">
                    {this.props.loggedInStatus ?
                     <form style={{"height": "10vh"}} >
                       <button onClick={(e) => this.props.handleSignOut(e)} className="mybutton logOutButton"> Logout</button>
                   </form>
                     
                     
                     : 

                    <form style={{"height": "10vh"}} onClick={(e) => this.props.handleLogin(e)}>
                       
                       <label>Email:</label>
                       <input id="email" type="email"></input>
                       <label>Password:</label>
                       <input id="password" type="password"></input>
                       <button className="mybutton" id="login">Login</button>
                       <button onClick={(e) => this.props.switchSignUpLogin(e)} className="mybutton">  Sign Up</button>
                   </form>
                    
                    }
                    
    
                    
                </div>
            );
        } else {
            return (
                <div id="options">
    
                    <form style={{"height": "10vh"}} id="signUpOptions" onClick={(e) => this.props.handleSignUp(e)}>
                        <input placeholder="Sign up with your Email:" id="email" type="email"></input>
                        <input placeholder="Your Password:" id="password" type="password"></input>
                        {/* <input placeholder="Confirm Password:" id="passwordConfirm" type="password"></input> */}
                        <button id="signUp" className="mybutton"> Sign Up</button>
                        <button  onClick={(e) => this.props.switchSignUpLogin(e)} className="mybutton"> Joined?</button>
                    </form>
    
                    
                </div>
            );
        }
       
    }
}

export default Options;