import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Slot from '../Slot/Slot';
import { BoardWrapper } from '../../components';

class Board extends PureComponent {
  render() {
    const { board } = this.props;

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
