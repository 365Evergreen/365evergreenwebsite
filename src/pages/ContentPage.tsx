import { useParams } from 'react-router-dom';

import { whatWeDoPages } from '../content/what-we-do';
import SectionRenderer from '../sections/SectionRenderer/SectionRenderer';

export default function ContentPage() {
  const { slug } = useParams();

  const page = slug
    ? whatWeDoPages[slug]
    : undefined;

  if (!page) {
    return <h1>Page not found</h1>;
  }

  return (
    <>
      {page.sections.map((section, index) => (
        <SectionRenderer
          key={`${section.type}-${index}`}
          section={section}
        />
      ))}
    </>
  );
}