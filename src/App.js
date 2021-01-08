import React, { Component } from 'react';
import './App.css';
import Profile from './components/main/Profile'
import Teams from './components/main/Teams'
import Options from './components/main/Options'
import Display from './components/main/Display'
// import { div, Col } from 'react-bootstrap'



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
      fetch('http://localhost:3000/api/standup')
          .then(res => res.json())
          .then(data => this.setState({ standUps: data }))
    }

    handleLogin(e) {
      e.preventDefault()
      if(e.target.id === "login"){
      
        let email = e.currentTarget.email.value
        let pass = e.currentTarget.password.value
        console.log(email, pass)
        let user = {email: email, password: pass}

        fetch("http://localhost:3000/api/login", {
          method: "post", // *GET, POST, PUT, DELETE, etc.
          body: JSON.stringify(user) 
        }).then(data => {
          console.log(data)
        });

      }
     
    }


    render() {
      return (

        <div id="application">
          <div id="topBar" >
            <Profile />
            <Options handleLogin={this.handleLogin}/>
          </div>
    
          <div id="mainDisplayAndTeamsRow">
            <div id="teamCol">
              <Teams />
            </div>
            <div id="displayCol">
              <Display />
            </div>
          </div>
    
        </div>
      );
    }
}

export default App;
