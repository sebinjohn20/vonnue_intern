import React, { Component } from 'react';
import FRinput from './FRinput';

class FRParentInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef(); // create a ref for child input
  }

  clickHandler = () => {
    // Access the input DOM element and focus it
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <FRinput ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default FRParentInput;
