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
      <button onClick={decrease} style={{ padding: '0.5rem', margin: '0.5rem', color: 'red' }}>-</button>
      <button onClick={reset} style={{ padding: '0.5rem', margin: '0.5rem', color: 'blue' }}>Reset</button>
      <p>Use the buttons to increase, decrease, or reset the value.</p>
      <p>Current value is: {state[0]}</p>
      <p>Note: This is a simple calculator using React Hooks.</p>
      <p>State is managed using useState hook.</p>
      <p>Array destructuring is used to access the state and the updater function.</p>
      <p>Click the buttons to see the value change.</p>
      <p>Initial value is set to 10.</p>
      <p>Enjoy using the calculator!</p>
      <p>Feel free to modify the initial value or styles as needed.</p>
      <p>Happy coding!</p>
      <p>Remember to import useState from 'react' at the top of your file.</p>
      <p>Make sure to run this code in a React environment.</p>
      <p>Check the console for any errors if something doesn't work.</p>
    </div>
  );
}

export default Calculator;