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

  render() {
    const { counters } = this.state;
    return (
      <React.Fragment>
        {counters.map(counter => {
          return (
            <Counter
              key={counter.id}
              id={counter.id}
              value={counter.value}
              handleCount={this.handleCount}
            />
          );
        })}
      </React.Fragment>
    );
  }
}
