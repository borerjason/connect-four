import React, { PureComponent } from 'react';

import SlotWrapper from './Wrapper/SlotWrapper';

class Slot extends PureComponent {
  handleClick(e) {
    e.preventDefault();
    console.log(this.props.id);
  }

  render() {
    return (
        <SlotWrapper
          onClick={this.handleClick.bind(this)} />
    );
  }
}

export default Slot;
