import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Slot from './Slot';
import { BoardWrapper } from '../components';

const Board = (props) => {
  const { board } = props;

  return (
    <BoardWrapper>
      {board.map((slot, index) => (
        <Slot
          id={index}
          key={Math.random() * 1000}
        />))}
    </BoardWrapper>
  );
};

Board.propTypes = { board: PropTypes.arrayOf(PropTypes.string).isRequired };

const mapStateToProps = ({ board }) => ({ board });

export default connect(mapStateToProps)(Board);
