import React from "react";

class GreetingClass extends React.Component {
  render() {
    const name = this.props.name;
    return <h2>Hello, {name}</h2>;
  }
}

export default GreetingClass;
