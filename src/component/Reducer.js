import { useState } from 'react';
function Reducer() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Reducer {count}</h1>
      <button onClick={() => { setCount((pre) => pre + 1) }}>
        + Increment
      </button>
    </div>
  )
}

export default Reducer;