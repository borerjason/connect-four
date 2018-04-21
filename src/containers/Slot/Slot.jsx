import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateBoard } from '../../store/app/actions';
import { validateMove, checkWinner } from '../../utils';

import SlotWrapper from './Wrapper/SlotWrapper';

class Slot extends PureComponent {
  handleClick = this.handleClick.bind(this);

  handleClick() {
    const { id, updateBoardState, board, color, isWinner } = this.props;
    if (validateMove(id, board, isWinner)) {
      const winner = checkWinner(id, board, color);
      updateBoardState(id, color, winner);
    } else {
      alert('Invalid Move');
    }
  }

  render() {
    const { id, board } = this.props;

    return (
      <SlotWrapper
        color={board[id]}
        onClick={this.handleClick}
      />
    );
  }
}

Slot.propTypes = {
  id: PropTypes.number.isRequired,
  updateBoardState: PropTypes.func.isRequired,
  board: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.string.isRequired,
  isWinner: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ board, color, isWinner }) => ({ board, color, isWinner });


const mapDispatchToProps = dispatch => ({
  updateBoardState: (id, color, isWinner) => {
    dispatch(updateBoard(id, color, isWinner));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Slot);
