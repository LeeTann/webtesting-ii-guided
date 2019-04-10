import React, { Component } from 'react';
import Players from './players/Players'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello world</h2>
        <Players />
      </div>
    );
  }
}

export default App;
