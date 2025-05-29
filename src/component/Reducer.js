import { useState } from "react";
import { useReducer } from "react";

const initialValue = {
  count: 0,
}

function Reducer() {
  const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(Reducer, initialValue);
  console.log(state);
  return (
    <div style={{ textAlign: 'center', margin: '2rem', padding: '2rem', border: '1px solid black', borderRadius: '5px' }}>
      <h1>{count}</h1>
      <button onClick={() => setCount((pre) => pre + 1)}>Increment</button>
    </div >
  )
}

export default Reducer;