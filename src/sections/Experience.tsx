import Section from '../components/Section';
import { experience } from '../data/content';

export default function Experience() {
  return (
    <Section id="experiencia" title="Experiencia práctica" intro={experience.context}>
      <article className="card reveal">
        <h3>{experience.title}</h3>
        <ul className="list cols">{experience.tasks.map((t) => <li key={t}>{t}</li>)}</ul>
      </article>
    </Section>
  );
}
