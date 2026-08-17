import Container from '../../components/Container/Container';
import styles from './RichTextSection.module.css';

interface Props {
  heading: string;
  content: string[];
}

export default function RichTextSection({
  heading,
  content,
}: Props) {
  return (
    <section className={styles.section}>
      <Container>
        <h2>{heading}</h2>

        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </Container>
    </section>
  );
}