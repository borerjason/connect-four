import React, { PureComponent } from 'react';

import SlotWrapper from './Wrapper/SlotWrapper';

class Slot extends PureComponent {
  render() {
    console.log(this.props);
    return (
        <SlotWrapper />
    );
  }
}

export default Slot;
