import React, { Component } from 'react';
import './App.css';
import Profile from './components/main/Profile'
import Options from './components/main/Options'
import Display from './components/main/Display'
import StandUpForm from './components/main/StandUpForm'
import Helpers from './js/api'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loggedIn: false,
          displaySignUp: false
        }
    }

    handleLogin = (e) => {
      e.preventDefault()
      if(e.target.id === "login"){
      
        let user = { email: e.currentTarget.email.value, password: e.currentTarget.password.value };

        fetch("http://localhost:3000/api/login", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user) 
        })
        .then(res => res.json())
        .then(userData => {
          // console.log(userData)
          if(userData.msg){
            alert(userData.msg)
          } else {
            localStorage.setItem("token", userData.token)
            fetch(`http://localhost:3000/api/standUp/${userData.userId}`, {
              method: "GET",
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `${localStorage.token}`
              } 
            })
            .then(res => res.json())
            .then((data) => {
              this.setState(
                { ...this.state,
                  userId: userData.userId,
                  loggedIn: userData.loggedInStatus,
                  standUps: data
                })
            }) 
          }

        })
      }
    }

    handleSubmit = (e) => {
      e.preventDefault()
      // console.log(e.currentTarget)

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
            // console.log(standUpData)
            fetch(`http://localhost:3000/api/standUp/${this.state.userId}`)
            .then(res => res.json())
            .then(data => this.setState({...this.state, standUps: data}))
          })
      }
    }

    handleSignUp = (e) => {

      console.log(e.target)
      e.preventDefault()
      if(e.target.id === "signUp"){
        
        let user = { email: e.currentTarget.email.value, password: e.currentTarget.password.value };
        // console.log(user)
        fetch("http://localhost:3000/api/users", {
          method: "post",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user) 
        })
        .then(res => res.json())
        .then(userData =>  {
          // console.log(userData)
          if(userData.msg){
            alert(userData.msg)
          } else {
            alert("Account Created")
          }
        })
      }
    }

    switchSignUpLogin = (e) => {  
      this.setState({...this.state, displaySignUp: !this.state.displaySignUp})
    }

    handleSignOut = (e) => {
      this.setState({displaySignUp: false, loggedIn: false, standUps: [], userId: null})
    }

    handleDeleteStandUp = (e) => {
      Helpers.deleteStandUp(e)
      .then(()=> {
        Helpers.findAllUserStandUps(this.state.userId)
        .then(response => response.json())
        .then((data) => {
          // console.log(data)
          this.setState({...this.state, standUps: data})
          console.log(this.state.standUps)
        })
      })
    }


    render() {
      return (

        <div id="application">
          <div id="topBar" >
            <Profile />
            <Options handleSignOut={this.handleSignOut} loggedInStatus={this.state.loggedIn} signUp={this.state.displaySignUp} switchSignUpLogin={this.switchSignUpLogin} handleSignUp={this.handleSignUp} loggedIn={this.state.loggedIn} handleLogin={this.handleLogin}/>
          </div>
    
          <div id="mainDisplayAndTeamsRow">
            <div id="teamCol">
              <StandUpForm handleSubmit={(e) => this.handleSubmit(e)}/>
            </div>
            <div id="displayCol">
              <Display deleteStandUp={(e) => this.handleDeleteStandUp(e)} standUps={this.state.standUps} handleSubmit={this.handleSubmit}/>
              
            </div>
          </div>
    
        </div>
      );
    }
}

export default App;
