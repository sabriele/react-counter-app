import React, { Component } from 'react';
import { counters } from '../../sampleData';
import Counter from '../Counter/Counter';

export default class Counters extends Component {
  state = {
    counters: counters,
  };

  handleCount = (counterId, count) => {
    const { counters } = this.state;

    const result = counters.map(counter => {
      if (counter.id === counterId) counter.value += count;
      return counter;
    });

    this.setState({ counters: result });
  };

  handleDelete = counterId => {
    const { counters } = this.state;
    const filteredData = counters.filter(counter => counter.id !== counterId);
    this.setState({ counters: filteredData });
  };

  handleReset = () => {
    const resetCounters = [...counters];
    resetCounters.map(counter => (counter.value = 0));
    this.setState({ counters: resetCounters });
  };

  render() {
    const { counters } = this.state;
    return (
      <React.Fragment>
        <button onClick={this.handleReset}>Reset</button>
        {counters.length === 0 && (
          <p>Why's no one receiving angpaos this year??</p>
        )}
        {counters.map(counter => {
          return (
            <Counter
              key={counter.id}
              id={counter.id}
              value={counter.value}
              handleCount={this.handleCount}
              handleDelete={this.handleDelete}
            />
          );
        })}
      </React.Fragment>
    );
  }
}
