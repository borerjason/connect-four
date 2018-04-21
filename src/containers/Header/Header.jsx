import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { resetBoard } from '../../store/app/actions';

class Header extends PureComponent {

  render() {
    const { isWinner, color, handleClick } = this.props;
    const lastColor = color === 'Blue' ? 'Red' : 'Blue';

    return (

      <div>
        { !isWinner ?
          <div>
            <p>{color}'s turn </p>
          </div> :
          <div>
            <p>{lastColor} Wins! </p>
            <button 
              className="btn btn-primary"
              onClick={handleClick}
              >Play Again
            </button>
          </div>
        }
      </div>
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
