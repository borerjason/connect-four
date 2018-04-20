import React, { PureComponent } from 'react';
import Slot from '../Slot/Slot';
import { intialBoard } from '../../utils/dummyData';

class Board extends PureComponent {
  render() {
    console.log(intialBoard);
    return (
      <div> 
      Here is where i will map through the slots
    </div>  
    );
  }
}

export default Board;
