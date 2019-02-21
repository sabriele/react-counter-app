import React, { Component } from 'react';
import './Counter.css';

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

  evaluatePositiveOrNegative = () => {
    const { value } = this.state;
    if (value === 0) return '';
    else if (value > 0) return 'positive';
    else return 'negative';
  };

  render() {
    const { value } = this.state;

    return (
      <React.Fragment>
        <div className={this.evaluatePositiveOrNegative()}>{value}</div>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </React.Fragment>
    );
  }
}
