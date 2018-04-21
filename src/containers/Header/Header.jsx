import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { resetBoard } from '../../store/app/actions';
import { Wrapper, Msg } from '../../components';

class Header extends PureComponent {

  render() {
    const { isWinner, color, handleClick } = this.props;
    const lastColor = color === 'Blue' ? 'Red' : 'Blue';

    return (

      <Wrapper>
        { !isWinner ?
          <Wrapper>
            <Msg
              color={color}
            >{color}'s turn
            </Msg>
          </Wrapper> :
          <Wrapper>
            <Msg
              color={lastColor}
            >{lastColor} Wins!
            </Msg>
            <button
              className="btn btn-primary"
              onClick={handleClick}
            >Play Again
            </button>
          </Wrapper>
        }
      </Wrapper>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    dispatch(resetBoard());
  },
});

const mapStateToProps = ({ isWinner, color }) => ({ isWinner, color });

export default connect(mapStateToProps, mapDispatchToProps)(Header);
