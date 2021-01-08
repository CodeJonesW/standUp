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
      fetch('http://localhost:3000/api/standUp')
          .then(res => res.json())
          .then(data => this.setState({ standUps: data}))
    }

    handleLogin(e) {
      e.preventDefault()
      if(e.target.id === "login"){
      
        let email = e.currentTarget.email.value
        let pass = e.currentTarget.password.value
        console.log(email, pass)
        let user = {email: email, password: pass}

        fetch("http://localhost:3000/api/login", {
          method: "post",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user) 
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        });

      }
     
    }

    handleSubmit(e){
      e.preventDefault()


      // implement user id
      let newStandUp = {
        yesterday: e.currentTarget.yesterday.value,
        today: e.currentTarget.today.value,
        blocker: e.currentTarget.blocker.value,
        userId: 1
      }

      fetch("http://localhost:3000/api/standUp", {
          method: "post",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newStandUp) 
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        });
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
              <Display standUps={this.state.standUps} handleSubmit={this.handleSubmit}/>
            </div>
          </div>
    
        </div>
      );
    }
}

export default App;
