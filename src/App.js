import React, { Component } from 'react';
import './App.css';
import Profile from './components/main/Profile'
import Teams from './components/main/Teams'
import Options from './components/main/Options'
import Display from './components/main/Display'
import StandUpForm from './components/main/StandUpForm'
// import { div, Col } from 'react-bootstrap'



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loggedIn: false,
          signUp: false
        }
    }

    componentDidUpdate() {
      console.log("updated")
      const loggedInUser = localStorage.getItem("user");
      if (loggedInUser) {
        const foundUser = JSON.parse(loggedInUser);
        console.log(foundUser)
      }
    };


    handleLogin = (e) => {
      e.preventDefault()
      if(e.target.id === "login"){
      
        let user = { email: e.currentTarget.email.value, password: e.currentTarget.password.value };

        fetch("http://localhost:3000/api/login", {
          method: "post",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user) 
        })
        .then(res => res.json())
        .then(userData => {
          fetch('http://localhost:3000/api/standUp/1')
          .then(res => res.json())
          .then((data) => {
            this.setState(
              { ...this.state,
                userId: userData.userId,
                loggedIn: userData.loggedInStatus,
                standUps: data
              })
          }) 
        })
      }
    }

    handleSubmit = (e) => {
      e.preventDefault()
      console.log(e.currentTarget)

      // implement user id !!
      if(!this.state.userId) {
        alert("Please log in to submit standUps")
      } else {
        let newStandUp = {
          yesterday: e.currentTarget.yesterday.value,
          today: e.currentTarget.today.value,
          blocker: e.currentTarget.blocker.value,
          userId: this.state.userId
        }
  
        fetch("http://localhost:3000/api/standUp", {
            method: "post",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newStandUp) 
          })
          .then(res => res.json())
          .then(standUpData => {
            console.log(standUpData)
            fetch(`http://localhost:3000/api/standUp/${this.state.userId}`)
            .then(res => res.json())
            .then(data => this.setState({...this.state, standUps: data}))
          })
      }

    }

    handleSignUp(e){
      e.preventDefault()
      if(e.target.id === "signUp"){
      
        let user = { email: e.currentTarget.email.value, password: e.currentTarget.password.value };

        // fetch("http://localhost:3000/api/login", {
        //   method: "post",
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(user) 
        // })
        // .then(res => res.json())
        // .then(userData => {
        //   fetch('http://localhost:3000/api/standUp/1')
        //   .then(res => res.json())
        //   .then((data) => {
        //     this.setState(
        //       { ...this.state,
        //         userId: userData.userId,
        //         loggedIn: userData.loggedInStatus,
        //         standUps: data
        //       })
        //   }) 
        // })
      }
    }

    switchSignUpLogin = (e) => {  
      this.setState({...this.state, signUp: !this.state.signUp})
    }


    render() {
      return (

        <div id="application">
          <div id="topBar" >
            <Profile />
            <Options signUp={this.state.signUp} switchSignUpLogin={this.switchSignUpLogin} handleSignUp={this.handleSignUp} loggedIn={this.state.loggedIn} handleLogin={this.handleLogin}/>
          </div>
    
          <div id="mainDisplayAndTeamsRow">
            <div id="teamCol">
              <StandUpForm handleSubmit={(e) => this.handleSubmit(e)}/>
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
