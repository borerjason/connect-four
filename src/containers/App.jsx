import React from 'react';
import Header from './Header';
import Board from './Board';
import { Body, Title } from '../components';

const App = () => (
  <Body>
    <Title>Connect Four</Title>
    <Header />
    <Board />
  </Body>
);

export default App;
