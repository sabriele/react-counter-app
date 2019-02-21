import React from 'react';

export default function Total(props) {
  const { counters } = props;
  const totalCounters = counters.reduce((accumulator, currentCounter) => {
    return accumulator + currentCounter.value;
  }, 0);

  return (
    <React.Fragment>
      <h5>Number of Children: {counters.length}</h5>
      <h5>Total Angpao Haul: {totalCounters}</h5>
    </React.Fragment>
  );
}
