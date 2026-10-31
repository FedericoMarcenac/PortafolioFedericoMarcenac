import Section from '../components/Section';
import { projects } from '../data/content';

export default function Projects() {
  return (
    <Section id="proyectos" title="Proyectos" intro="Sitios reales, con código público.">
      <div className="grid g2">
        {projects.map((p) => (
          <article key={p.name} className="card reveal project">
            <div className="thumb">
              {p.image ? <img src={p.image} alt={`Captura de ${p.name}`} loading="lazy" /> : <span aria-hidden="true">{p.name}</span>}
            </div>
            <div className="pbody">
              <p className="status mono">{p.status}</p>
              <h3>{p.name}</h3>
              <p className="mute">{p.description}</p>
              <ul className="list">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
              <ul className="tags">{p.stack.map((s) => <li key={s} className="tag proyectos">{s}</li>)}</ul>
              <div className="actions">
                <a className="btn btn-ghost btn-sm" href={p.repo} target="_blank" rel="noopener noreferrer">Repositorio</a>
                {p.demo && <a className="btn btn-primary btn-sm" href={p.demo} target="_blank" rel="noopener noreferrer">Ver demo</a>}
              </div>
            </div>
          </article>
        ))}
        <article className="card reveal slot">
          <h3>Próximos proyectos</h3>
          <p className="mute">Acá se sumarán mis proyectos académicos y personales a medida que los termine.</p>
        </article>
      </div>
    </Section>
  );
}
