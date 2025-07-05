import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Day 1 - React Counter</h2>
      <p style={{ fontSize: '24px' }}>Count: {count}</p>

      <button onClick={() => setCount(count + 1)} style={{ marginRight: '10px' }}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)} style={{ marginRight: '10px' }}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default CounterApp;