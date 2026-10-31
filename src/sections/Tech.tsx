import Section from '../components/Section';
import { techGroups, levelLabels, type Level } from '../data/content';

export default function Tech() {
  const levels = Object.keys(levelLabels) as Level[];
  return (
    <Section id="tecnologias" title="Tecnologías y conocimientos" intro="Separo lo que ya uso en proyectos de lo que sigo aprendiendo. Sin porcentajes inventados.">
      <ul className="legend reveal" aria-label="Referencias">
        {levels.map((l) => <li key={l}><i className={`tag ${l}`} />{levelLabels[l]}</li>)}
      </ul>
      <div className="grid g3">
        {techGroups.map((g) => (
          <article key={g.title} className="card reveal">
            <h3>{g.title}</h3>
            <ul className="tags">
              {g.items.map(([name, lvl]) => (
                <li key={name} className={`tag ${lvl}`} title={levelLabels[lvl]}>{name}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
