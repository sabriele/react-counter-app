import React from 'react';
import './Counter.css';

export default function Counter(props) {
  const evaluatePositiveOrNegative = () => {
    const { value } = props;
    if (value === 0) return '';
    else if (value > 0) return 'positive';
    else return 'negative';
  };

  const { value, id, handleCount, handleDelete } = props;
  return (
    <div>
      <span>Child {id}:</span>
      <span className={evaluatePositiveOrNegative()}>{value}</span>
      <button onClick={() => handleCount(id, 1)}>+</button>
      <button onClick={() => handleCount(id, -1)}>-</button>
      <span>Married?</span>
      <button onClick={() => handleDelete(id)}>Yes</button>
    </div>
  );
}
