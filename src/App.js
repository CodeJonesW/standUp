import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/main/Profile'
import Teams from './components/main/Teams'
import Options from './components/main/Options'
import Display from './components/main/Display'
import { Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Profile />
      <Teams />
    </div>
  );
}

export default App;
