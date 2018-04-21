import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateBoard } from '../../store/app/actions';
import { validateMove, checkWinner } from '../../utils';

import SlotWrapper from './Wrapper/SlotWrapper';

class Slot extends PureComponent {
  handleClick() {
    const { id, updateBoardState, game: { board, player, color } } = this.props;

    if (validateMove(id, board)) {
      const isWinner = checkWinner(id, board, color);
      updateBoardState(id, player, color);
      console.log(isWinner);
    } else {
      alert('Invalid Move');
    }
  }

  render() {
    const { id, game: { board } } = this.props;

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
  game: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({ game }) => ({
  game,
});

const mapDispatchToProps = dispatch => ({
  updateBoardState: (id, player, color) => {
    dispatch(updateBoard(id, player, color));
  },  
});

export default connect(mapStateToProps, mapDispatchToProps)(Slot);
