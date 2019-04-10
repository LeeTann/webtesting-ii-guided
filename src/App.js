import React, { Component } from 'react';
import Players from './players/Players'
import './App.css';

class App extends Component {
  state = {
    greeting: '',
    players: [
      { id: 1, name: 'Nate'}, 
      { id: 2, name: 'Lee' },
      { id: 3, name: 'Rebby'}
    ]
  }

  render() {
    return (
      <div className="App">
        <h2>Hello world</h2>
        <div>
          <button onClick={this.greet}>Greet</button>
          <div>{this.state.greeting}</div>
        </div>
        <Players players={this.state.players} />
      </div>
    );
  }

  greet = () => {
    this.setState({ greeting: 'Hello Team Lee'})
    console.log(this.state)
  }
}

export default App;
