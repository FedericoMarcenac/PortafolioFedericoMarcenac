import Section from '../components/Section';
import { support } from '../data/content';

export default function Support() {
  return (
    <Section id="soporte" title="Soporte IT" intro="Además de programar, sé trabajar con equipos y resolver problemas técnicos.">
      <div className="grid g3">
        {support.map((s) => (
          <article key={s.title} className="card reveal"><h3>{s.title}</h3><p className="mute">{s.text}</p></article>
        ))}
      </div>
    </Section>
  );
}
