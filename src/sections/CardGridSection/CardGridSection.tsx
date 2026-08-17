import Container from '../../components/Container/Container';
import CardGrid from '../../components/CardGrid/CardGrid';

import type { CardData } from '../../components/Card/Card.types';

interface Props {
  heading: string;
  cards: CardData[];
}

export default function CardGridSection({
  heading,
  cards,
}: Props) {
  return (
    <section>
      <Container>
        <h2>{heading}</h2>

        <CardGrid cards={cards} />
      </Container>
    </section>
  );
}