// React Hooks ..
import { useState } from "react";

function Calculator() {
  const state = useState(10);
  // array destructuring
  function increate() {
    state[1](state[0] + 1);
  }
  function decrease() {
    state[1](state[0] - 1);
  }
  function reset() {
    state[1](10);
  }
  // state[0] is the current value

  return (
    <div style={{ textAlign: 'center', margin: '2rem', padding: '2rem', border: '1px solid black', borderRadius: '5px' }}>
      <h1>{state[0]}</h1>
      <button onClick={increate} style={{ padding: '0.5rem', margin: '0.5rem', color: 'green' }}>+</button>
    </div>
  );
}

export default Calculator;