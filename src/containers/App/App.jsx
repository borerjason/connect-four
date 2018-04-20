import React, { Component } from 'react';
import Header from '../Header/Header';
import Board from '../Board/Board';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Board />
      </div>
    );
  }
}

export default App;
