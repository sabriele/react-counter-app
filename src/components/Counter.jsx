import React, { Component } from 'react';

export default class Counter extends Component {
  state = { id: 1, value: 0 };

  handleClick = event => {
    console.log(`Welcome has been ${event}ed!`);
  };

  render() {
    const { value } = this.state;
    return (
      <React.Fragment>
        <div>{value}</div>
      </React.Fragment>
    );
  }
}
