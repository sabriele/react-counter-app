import React, { Component } from 'react';
import { counters } from './sampleData';
import Counters from './components/Counters/Counters';
import Total from './components/Total/Total';

export class App extends Component {
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
    return (
      <React.Fragment>
        <h1>Angpao Counter Machine</h1>
        <Total counters={this.state.counters} />
        <Counters
          counters={this.state.counters}
          handleCount={this.handleCount}
          handleDelete={this.handleDelete}
          handleReset={this.handleReset}
        />
      </React.Fragment>
    );
  }
}

export default App;
