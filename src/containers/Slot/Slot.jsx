import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateBoard } from '../../store/app/actions';
import { validateMove, checkWinner } from '../../utils';

import SlotWrapper from './Wrapper/SlotWrapper';

class Slot extends PureComponent {
  handleClick() {
    const { id, updateBoardState, game: { board, color, isWinner } } = this.props;
    console.log('color', color);
    if (validateMove(id, board, isWinner)) {
      const winner = checkWinner(id, board, color);
      updateBoardState(id, color, winner);
    } else {
      alert('Invalid Move');
    }
  }

  render() {
    const { id, game: { board } } = this.props;
    console.log('board id', board[id]);
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
  game: PropTypes.objectOf(PropTypes.shape).isRequired,
};

const mapStateToProps = ({ game }) => ({ game });

const mapDispatchToProps = dispatch => ({
  updateBoardState: (id, color, isWinner) => {
    dispatch(updateBoard(id, color, isWinner));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Slot);
