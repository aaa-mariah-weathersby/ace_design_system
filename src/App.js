import React, { Component } from 'react';
import './App.css';

import './globals/styles/main.css'
// import * as AlphaLib from 'react_lib_alpha'
import {PopupMenu, Button} from 'react_lib_alpha'

import PrimaryButton from '../src/components/button/primaryButton'
import Input from './components/input/input';
// import { Button } from '../node_modules/@material-ui/core';

class App extends Component {

  render() {

    // console.log("alpha lib: ", AlphaLib)
    console.log("alpha popup: ", PopupMenu)

    return (
      <div className="App">

        <h1>Testing Header 1</h1>
        <h3>Testing Header 3</h3>
        <a>testing</a>
        <br/>

        <sub>testig-sub</sub>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>



        <PrimaryButton
          label={"testing"}
          onClick={ () => { alert("hit")} }
          // active={false}
        />                 
           
        <br/>
        <br/>
        <PrimaryButton
          label={"testing"}
          onClick={ () => { alert("hit")} }
          active={true}
        />        
        
        <br/>
        <br/>
        <PrimaryButton
          label={"testing"}
          onClick={ () => { alert("hit")} }
          active={false}
        />                 
                
        <br/>
        <Input
          label={"testing"}
        />
        <br/>

        <Input
          label={"testing"}
        />

        <Button/>

      </div>
    );
  }
}

export default App;
