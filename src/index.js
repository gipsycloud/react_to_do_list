import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { cards } from './cards.js';
import Card from './component/Card.js';

function CardList() {
  return (
    <main className="card-list">
      {cards.map((card) => {
        return <Card key={card.id} {...card} />;
      })}
    </main>
  );
}

function Description() {
  return <p style={{ marginTop: "0.5rem" }}>This is a description of the card. It contains some information about the content.</p>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CardList />);