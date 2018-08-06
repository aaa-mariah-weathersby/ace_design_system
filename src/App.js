import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import './globals/styles/main.css'

import PrimaryButton from '../src/components/button/primaryButton'

class App extends Component {



  render() {
    return (
      <div className="App">

        <h1>Testing Header 1</h1>
        <h3>Testing Header 3</h3>
        <a>testing</a>

        <sub>testng-sub</sub>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <PrimaryButton
          label={"testing"}
          onClick={ () => { alert("hit")} }
          active={true}
        />

      </div>
    );
  }
}

export default App;
