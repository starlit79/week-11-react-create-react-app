import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import App from "./App";

function App (){
  return (
    <div className = "App">
      <header className = "App-header">
        <img src= {logo} className="" alt="logo" />
      </header>
      <Clock />
    </div>
  )
}

export default App;
