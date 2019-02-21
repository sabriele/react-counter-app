import React from 'react';
import Counter from '../Counter/Counter';

export default function Counters(props) {
  const { counters, handleCount, handleDelete, handleReset } = props;
  return (
    <React.Fragment>
      <span>New Year New Angpaoz → </span>
      <button onClick={handleReset}>Reset Counter!</button>
      {counters.length === 0 && (
        <p>Why's no one receiving angpaos this year??</p>
      )}
      {counters.map(counter => {
        return (
          <Counter
            key={counter.id}
            id={counter.id}
            value={counter.value}
            handleCount={handleCount}
            handleDelete={handleDelete}
          />
        );
      })}
    </React.Fragment>
  );
}
