import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import type { CardData } from './Card.types';

interface CardProps {
  card: CardData;
}

export default function Card({ card }: CardProps) {
  const content = (
    <>
      {card.imageSrc && (
        <div className={styles.imageWrapper}>
          {card.imageSrc ? <img src={card.imageSrc}/>: null}
        </div>
      )}

      <div className={styles.content}>
        <h3 className={styles.title}>
          {card.title}
        </h3>

        <p className={styles.description}>
          {card.description}
        </p>
      </div>
    </>
  );

  return card.href ? (
    <Link
      to={card.href}
      className={styles.card}
      aria-label={card.title}
    >
      {content}
    </Link>
  ) : (
    <article className={styles.card}>
      {content}
    </article>
  );
}