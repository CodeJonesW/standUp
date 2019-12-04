import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/main/Profile'
import Teams from './components/main/Teams'
import Options from './components/main/Options'
import Display from './components/main/Display'
import { div, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="Application">
      <div id="topBar" >
        <Profile />
        <Options />
      </div>

      <div id="mainDisplayAndTeams">
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

export default App;
