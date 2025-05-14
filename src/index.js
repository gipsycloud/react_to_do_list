import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CardList from './App';

// React Hooks ..
// useState
var count = 0;
function increase() {
  count++;
  console.log(count);
}

function Calculator() {
  return(
    <div style={{textAlign: 'center', margin: '2rem', padding: '2rem', border: '1px solid black', borderRadius: '5px'}}>
      <h1>Calculator</h1>
      <button onClick={increase} style={{padding: '0.5rem', margin: '0.5rem', color: 'green'}}>+</button>
    </div>  
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardList />
    <Calculator />
  </React.StrictMode>
)