import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateBoard } from '../../store/app/actions';
import { validateMove } from '../../utils';

import SlotWrapper from './Wrapper/SlotWrapper';

class Slot extends PureComponent {
  handleClick(e) {
    e.preventDefault();
    const { id, updateBoardState, board: { board } } = this.props;
    console.log(this.props);
    if (validateMove(id, board)) {
      updateBoardState(id, 'Blue');
    } else {
      console.log('Invalid Move');
    }
  }

  render() {
    const { id, board: { board } } = this.props;
    return (
      <SlotWrapper 
        color={board[id]}
        onClick={this.handleClick.bind(this)}
      />
    );
  }
}

Slot.propTypes = {
  id: PropTypes.number.isRequired,
  updateBoardState: PropTypes.func.isRequired,
  board: PropTypes.object,
};

const mapStateToProps = ({ board }) => ({
  board,
});

const mapDispatchToProps = dispatch => ({
  updateBoardState: (id, player) => {
    dispatch(updateBoard(id, player));
  },  
});

export default connect(mapStateToProps, mapDispatchToProps)(Slot);
