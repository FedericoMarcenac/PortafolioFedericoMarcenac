import Section from '../components/Section';
import { education } from '../data/content';

export default function Education() {
  return (
    <Section id="formacion" title="Formación académica">
      <ol className="timeline">
        {education.map((e) => (
          <li key={e.school} className="card reveal">
            <p className="status mono">{e.status}</p>
            <h3>{e.school}</h3>
            <p>{e.title}</p>
            <p className="mute">{e.detail}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
