import React, { Component } from 'react';
import './App.css';
import Menu from '../Menu/Menu'
import Map from "../Map/Map";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Menu/>
        <Map/>
      </div>
    );
  }
}

export default App;
