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
                     <form  >
                       <button onClick={(e) => this.props.handleSignOut(e)} className="mybutton logOutButton"> Logout</button>
                   </form>
                     
                     
                     : 

                    <form id="loginForm"  onClick={(e) => this.props.handleLogin(e)}>
                       
                      
                       <input className="loginInputs" placeholder="Email" id="email" type="email"></input>
                       <input className="loginInputs" placeholder="Password" id="password" type="password"></input>
                       <button className="myLoginbuttons " id="login">Login</button>
                       <button onClick={(e) => this.props.switchSignUpLogin(e)} className="myLoginbuttons">  Sign Up</button>
                   </form>
                    
                    }
                    
    
                    
                </div>
            );
        } else {
            return (
                <div id="options">
    
                    <form  id="signUpOptions" onClick={(e) => this.props.handleSignUp(e)}>
                        <input className="loginInputs" placeholder="Sign up with your Email:" id="email" type="email"></input>
                        <input className="loginInputs" placeholder="Your Password:" id="password" type="password"></input>
                        {/* <input placeholder="Confirm Password:" id="passwordConfirm" type="password"></input> */}
                        <button id="signUp" className="myLoginbuttons"> SignUp</button>
                        <button  onClick={(e) => this.props.switchSignUpLogin(e)} className="myLoginbuttons"> Joined?</button>
                    </form>
    
                    
                </div>
            );
        }
       
    }
}

export default Options;