import Section from '../components/Section';
import { profile } from '../data/content';

const blocks = [
  { t: 'Quién soy', p: 'Soy estudiante de programación y tengo un gran interés por el desarrollo de software y las tecnologías informáticas.' },
  { t: 'Qué aprendí', p: 'Durante mi formación fui adquiriendo conocimientos en desarrollo web, programación, bases de datos y herramientas de desarrollo.' },
  { t: 'Experiencia práctica', p: 'Colaboré en un negocio familiar con tareas de tecnología, selección de productos, comparación de proveedores, cotizaciones, soporte técnico y gestión administrativa.' },
  { t: 'Hacia dónde voy', p: 'Quiero combinar la programación con mi capacidad para resolver problemas técnicos, participar en proyectos reales y desarrollar nuevas habilidades en el sector IT.' },
];

export default function About() {
  return (
    <Section id="sobre-mi" title="Sobre mí">
      <div className="about-grid">
        <div className="card photo reveal">
          {profile.photo ? <img src={profile.photo} alt="Federico Marcenac" loading="lazy" /> : <span aria-hidden="true">FM</span>}
        </div>
        <div className="grid g2">
          {blocks.map((b) => (
            <article key={b.t} className="card reveal"><h3>{b.t}</h3><p className="mute">{b.p}</p></article>
          ))}
        </div>
      </div>
    </Section>
  );
}
