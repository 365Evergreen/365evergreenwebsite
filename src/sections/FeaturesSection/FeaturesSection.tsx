import CardGrid from '../../components/CardGrid/CardGrid';
import Container from '../../components/Container/Container';
import styles from './FeaturesSection.module.css'

const cards = [
  {
    id: '1',
    title: 'Copilot Updates',
    description:
      'Stay current with Copilot releases and roadmap items.',
    imageSrc:
  'src/assets/ic_fluent_grid_24_regular.png',
    imageAlt:
      'Microsoft Copilot illustration',
    href: '/copilot',
  },
  {
    id: '2',
    title: 'Teams Changes',
    description:
      'Track Teams updates and feature rollouts.',
    imageSrc:
      'https://cdn.365evergreen.com/media/plant-cover-1440-900.webp',
    imageAlt:
      'Microsoft Teams interface',
    href: '/teams',
  },
];

export default function FeaturesSection() {
  return (
    <section className={styles.container}>
      <Container>
        <CardGrid cards={cards} />
      </Container>
    </section>
  );
}
