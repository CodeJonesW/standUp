import React, { Component } from 'react';import logo from './logo.svg';
import './App.css';
import Profile from './components/main/Profile'
import Teams from './components/main/Teams'
import Options from './components/main/Options'
import Display from './components/main/Display'
import { div, Col } from 'react-bootstrap'



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

    handleLogin() {
      console.log("handle login")
    }


    render() {
      return (

        <div id="application">
          <div id="topBar" >
            <Profile handleLogin={this.handleLogin}/>
            <Options />
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
