import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const cards = [
  {
    id: 1,
    title: "Card Title",
    text: "This is a description of the card. It contains some information about the content.",
    image: "https://imgs.search.brave.com/hEQ58nNRwjSFMXJggjpS1FL09XKOOJCIjhsIQMRIx5Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aHVic3BvdC5jb20v/aHViZnMvSG93JTIw/dG8lMjBTZXQlMjBV/cCUyMGFuJTIwSFRN/TCUyMFJlZGlyZWN0/JTIwb24lMjBZb3Vy/JTIwV2Vic2l0ZS53/ZWJw",
  },
  {
    id: 2,
    title: "Card Title",
    text: "This is a description of the card. It contains some information about the content.",
    image: "https://imgs.search.brave.com/hEQ58nNRwjSFMXJggjpS1FL09XKOOJCIjhsIQMRIx5Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aHVic3BvdC5jb20v/aHViZnMvSG93JTIw/dG8lMjBTZXQlMjBV/cCUyMGFuJTIwSFRN/TCUyMFJlZGlyZWN0/JTIwb24lMjBZb3Vy/JTIwV2Vic2l0ZS53/ZWJw",
  },
  {
    id: 3,
    title: "Card Title",
    text: "This is a description of the card. It contains some information about the content.",
    image: "https://imgs.search.brave.com/hEQ58nNRwjSFMXJggjpS1FL09XKOOJCIjhsIQMRIx5Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aHVic3BvdC5jb20v/aHViZnMvSG93JTIw/dG8lMjBTZXQlMjBV/cCUyMGFuJTIwSFRN/TCUyMFJlZGlyZWN0/JTIwb24lMjBZb3Vy/JTIwV2Vic2l0ZS53/ZWJw",
  },
  {
    id: 4,
    title: "Card Title",
    text: "This is a description of the card. It contains some information about the content.",
    image: "https://imgs.search.brave.com/hEQ58nNRwjSFMXJggjpS1FL09XKOOJCIjhsIQMRIx5Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aHVic3BvdC5jb20v/aHViZnMvSG93JTIw/dG8lMjBTZXQlMjBV/cCUyMGFuJTIwSFRN/TCUyMFJlZGlyZWN0/JTIwb24lMjBZb3Vy/JTIwV2Vic2l0ZS53/ZWJw",
  },
  {
    id: 5,
    title: "Card Title",
    text: "This is a description of the card. It contains some information about the content.",
    image: "https://imgs.search.brave.com/hEQ58nNRwjSFMXJggjpS1FL09XKOOJCIjhsIQMRIx5Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aHVic3BvdC5jb20v/aHViZnMvSG93JTIw/dG8lMjBTZXQlMjBV/cCUyMGFuJTIwSFRN/TCUyMFJlZGlyZWN0/JTIwb24lMjBZb3Vy/JTIwV2Vic2l0ZS53/ZWJw",
  },
];

function CardList() {
  return (
    <main className="card-list">
      {cards.map((card) => {
        return <Card key={card.id} {...card} />;
      })}
    </main>
  );
}

function Card(props) {
  console.log(props)
  // destructuring props
  const { image, title, text, number } = props;
  return (
    <section className="card">
      <img style={{ width: "50%", height: "50%" }} src={image} alt='Random' />
      <h2 style={{ marginTop: "1rem" }}>{title}</h2>
      <p>{text}</p>
      <p>{number}</p>
    </section >
  );
}

function Description() {
  return <p style={{ marginTop: "0.5rem" }}>This is a description of the card. It contains some information about the content.</p>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CardList />);