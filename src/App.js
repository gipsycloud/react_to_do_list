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

export default CardList;