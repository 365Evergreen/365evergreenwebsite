import Card from '../Card/Card';
import styles from './CardGrid.module.css';
import type { CardGridProps } from './CardGrid.types';

export default function CardGrid({
  cards,
}: CardGridProps) {
  return (
    <div className={styles.grid}>
      {cards.map(card => (
        <Card
          key={card.id}
          card={card}
        />
      ))}
    </div>
  );
}
