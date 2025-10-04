import React, { Component } from "react";

class DummyPage extends Component {

    componentDidMount()
{
    console.log("componentDidMount",this.props.name)
}  
componentWillUnmount(){
    console.log("componetWillUnmount",this.props.name)
}
componentDidUpdate(){
    console.log("ComponentDidUpdate",this.props.name

    )
}

render() {
    const { name } = this.props;
    return (
      <div className="dummy-page">
        <h2>{name} Page</h2>
        <p>This is the {name} page content.</p>
      </div>
    );
  }
}

export default DummyPage;
