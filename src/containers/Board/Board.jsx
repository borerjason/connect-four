import React, { PureComponent } from 'react';
import Slot from '../Slot/Slot';
import { buildIntialBoard } from '../../utils/dummyData';
import BoardWrapper from '../../components/Wrapper';

class Board extends PureComponent {
  render() {
    const board = buildIntialBoard();

    return (
      <BoardWrapper> 
        {board.map((slot, index) => 
          <Slot
            id={index} 
            value={slot}
            key={Math.random() * 1000}
          />)}
      </BoardWrapper>  
    );
  }
}

export default Board;
