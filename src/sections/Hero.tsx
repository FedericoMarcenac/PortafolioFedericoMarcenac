import Terminal from '../components/Terminal';

export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-t">
      <div className="wrap hero-grid">
        <div>
          <p className="mute mono">Hola, soy</p>
          <h1 id="hero-t">Federico Marcenac</h1>
          <p className="role">Desarrollador de software | Estudiante de Programación | Tecnología IT</p>
          <p className="lead">Me apasiona la tecnología y el desarrollo de software. Actualmente estudio la Tecnicatura Universitaria en Programación en UTN Bahía Blanca, donde continúo desarrollando mis habilidades en programación, desarrollo web y bases de datos.</p>
          <p className="lead">Me gusta aprender creando proyectos, resolver problemas y transformar ideas en soluciones funcionales.</p>
          <div className="actions">
            <a className="btn btn-primary" href="#proyectos">Ver mis proyectos</a>
            <a className="btn btn-ghost" href="#contacto">Contactarme</a>
          </div>
          <ul className="badges">
            <li>Estudiante de UTN</li>
            <li>Desarrollador en formación</li>
            <li><span className="dot" />Disponible para oportunidades laborales</li>
          </ul>
        </div>
        <Terminal />
      </div>
    </section>
  );
}
