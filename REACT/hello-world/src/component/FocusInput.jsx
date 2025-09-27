import React, { Component } from "react";
import Input from "./input";


class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef(); // ref to child component
  }

  clickHandler = () => {
    this.componentRef.current.focusInput(); // ✅ calls method in child component
  };

  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default FocusInput;
