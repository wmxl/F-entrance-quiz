import React, { Component } from 'react';
import './App.scss';
import Welcome from '../assets/components/Welcome';
import StudentList from '../assets/components/StudentList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        Hello World
        <Welcome />
        <StudentList />
      </div>
    );
  }
}

export default App;
