import React from 'react';
import Header from '../Header/Header';
import Board from '../Board/Board';
import { Body, Title } from '../../components';

const App = () => {
  console.log(Body);
  return (
    <Body>
      <Title>Connect Four</Title>
      <Header />
      <Board />
    </Body>
  );
};

export default App;
