import React, { Component } from 'react';

export default class Counter extends Component {
  state = { id: 1, value: 0 };

  handleIncrement = () => {
    const value = this.state.value;
    this.setState({ value: value + 1 });
  };
  handleDecrement = () => {
    const value = this.state.value;
    this.setState({ value: value - 1 });
  };

  render() {
    const { value } = this.state;
    return (
      <React.Fragment>
        <div>{value}</div>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </React.Fragment>
    );
  }
}
