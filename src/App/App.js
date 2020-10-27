import React, { Component } from 'react';
import './App.scss';
import Welcome from '../assets/components/Welcome';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        Hello World
        <Welcome />
      </div>
    );
  }
}

export default App;
