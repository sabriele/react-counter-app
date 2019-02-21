import React, { Component } from 'react';
import './Counter.css';

export default class Counter extends Component {
  evaluatePositiveOrNegative = () => {
    const { value } = this.props;
    if (value === 0) return '';
    else if (value > 0) return 'positive';
    else return 'negative';
  };

  render() {
    const { value, id, handleCount, handleDelete } = this.props;

    return (
      <div>
        <span>Child no.{id}:</span>
        <span className={this.evaluatePositiveOrNegative()}>{value}</span>
        <button onClick={() => handleCount(id, 1)}>+</button>
        <button onClick={() => handleCount(id, -1)}>-</button>
        <span>Married?</span>
        <button onClick={() => handleDelete(id)}>Yes</button>
      </div>
    );
  }
}
