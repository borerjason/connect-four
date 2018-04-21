import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { resetBoard } from '../store/actions';
import { Wrapper, Msg } from '../components';

const Header = (props) => {
  const { isWinner, color, handleClick } = props;
  const lastColor = color === 'Blue' ? 'Red' : 'Blue';

  const msg = isWinner ? (
    <Wrapper>
      <Msg color={lastColor}>{lastColor} Wins!</Msg>
      <button
        className="btn btn-primary"
        onClick={handleClick}
      >Play Again
      </button>
    </Wrapper>
  ) : (
    <Msg color={color}>
      {`${color}'`}s turn
    </Msg>
  );

  return (
    <Wrapper>
      {msg}
    </Wrapper>
  );
};

Header.propTypes = {
  color: PropTypes.string.isRequired,
  isWinner: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    dispatch(resetBoard());
  },
});

const mapStateToProps = ({ isWinner, color }) => ({ isWinner, color });

export default connect(mapStateToProps, mapDispatchToProps)(Header);
