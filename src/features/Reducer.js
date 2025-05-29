import { useState } from 'react';
function Reducer() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: 'center', margin: '2rem', padding: '2rem', border: '1px solid black', borderRadius: '5px' }}>
      <h1>{count}</h1>
      <button onClick={() => setCount((pre) => pre + 1)}>Increment</button>  {/* previous value */}
    </div >
  )
}

export default Reducer;