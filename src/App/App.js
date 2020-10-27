import React, { Component } from 'react';
import './App.scss';
import Groups from '../assets/components/Groups';
import StudentList from '../assets/components/StudentList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Groups />
        <StudentList />
      </div>
    );
  }
}

export default App;
