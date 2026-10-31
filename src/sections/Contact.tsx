import Section from '../components/Section';
import { profile } from '../data/content';

export default function Contact() {
  const main = profile.email ? `mailto:${profile.email}` : profile.linkedin;
  return (
    <Section id="contacto" title="Contacto">
      <div className="card reveal contact">
        <p className="lead">¿Tenés un proyecto, una oportunidad laboral o simplemente querés conversar sobre tecnología? Me gustaría conocerte.</p>
        <div className="actions">
          <a className="btn btn-primary" href={main} {...(profile.email ? {} : { target: '_blank', rel: 'noopener noreferrer' })}>Contactar</a>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noopener noreferrer">Ver GitHub</a>
          <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">Visitar LinkedIn</a>
        </div>
        <p className="mute mono">
          Correo: {profile.email ? <a href={`mailto:${profile.email}`}>{profile.email}</a> : 'próximamente (completalo en src/data/content.ts)'}
        </p>
      </div>
    </Section>
  );
}
