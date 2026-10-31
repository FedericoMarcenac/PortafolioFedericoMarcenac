import { useState } from 'react';
import Section from '../components/Section';
import { projects } from '../data/content';

const src = (p: string) => import.meta.env.BASE_URL + p;

function Gallery({ name, images }: { name: string; images: string[] }) {
  const [i, setI] = useState(0);
  return (
    <div className="gallery">
      <div className="thumb"><img src={src(images[i])} alt={`Captura ${i + 1} de ${name}`} loading="lazy" /></div>
      {images.length > 1 && (
        <div className="shots" role="group" aria-label={`Capturas de ${name}`}>
          {images.map((im, k) => (
            <button key={im} type="button" aria-label={`Ver captura ${k + 1}`} aria-pressed={k === i} onClick={() => setI(k)}>
              <img src={src(im)} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="proyectos" title="Proyectos" intro="Sitios reales, con código público.">
      <div className="grid g2">
        {projects.map((p) => (
          <article key={p.name} className="card reveal project">
            <Gallery name={p.name} images={p.images} />
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
