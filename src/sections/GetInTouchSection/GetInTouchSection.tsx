import Container from '../../components/Container/Container';
import GetInTouch from '../../components/GetInTouch/GetInTouch';

import styles from './GetInTouchSection.module.css';

export default function GetInTouchSection() {
  return (
    <section className={styles.section}>
      <Container>
        <GetInTouch
          leftColumn={
            <>
              <h3>Let's Start a Conversation</h3>

              <p>
                Whether you're looking for Microsoft 365
                adoption guidance, Copilot readiness
                support, or assistance with your Evergreen
                strategy, we'd love to hear from you.
              </p>

              <ul>
                <li>Microsoft 365 Governance</li>
                <li>Copilot Adoption</li>
                <li>Evergreen Change Management</li>
              </ul>
            </>
          }
          rightColumn={null}
        />
      </Container>
    </section>
  );
}