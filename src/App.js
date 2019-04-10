import React, { Component } from 'react';
import Players from './players/Players'
import './App.css';

class App extends Component {
  state = {
    greeting: ''
  }

  render() {
    return (
      <div className="App">
        <h2>Hello world</h2>
        <div>
          <button onClick={this.greet}>Greet</button>
          <div>{this.state.greeting}</div>
        </div>
        <Players />
      </div>
    );
  }

  greet = () => {
    this.setState({ greeting: 'Hello Team Lee'})
    console.log(this.state)
  }
}

export default App;
