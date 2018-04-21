import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Slot from '../Slot/Slot';
// import { buildIntialBoard } from '../../utils/dummyData';
import BoardWrapper from '../../components/Wrapper';

class Board extends PureComponent {
  render() {
    const board = this.props.board;

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

const mapStateToProps = ({ board }) => ({ board });

export default connect(mapStateToProps)(Board);
