import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Header extends PureComponent {
  render() {
    const { isWinner, color } = this.props;
    const lastColor = color === 'Blue' ? 'Red' : 'Blue';
    
    return (

      <div>
        { !isWinner ?
          <div>
            <p>{color}'s turn </p>
          </div> :
          <div>
            <p>{lastColor} Wins! </p>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = ({ game: { isWinner, color } }) => ({ isWinner, color });

export default connect(mapStateToProps)(Header);
