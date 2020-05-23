import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RecommendedFriends from './components/RecommendedFriends'

class App extends Component {
  render() {
    return (
      <div>
        <RecommendedFriends />
      </div>
    );
  }
}

export default App;
