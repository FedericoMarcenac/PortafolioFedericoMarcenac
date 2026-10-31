import { useEffect, useState } from 'react';
import { nav } from '../data/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('inicio');

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    nav.forEach(({ id }) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#inicio" className="logo" aria-label="Federico Marcenac, ir al inicio">
          <span className="logo-mark">&lt;/&gt;</span> Federico Marcenac
        </a>
        <button className="burger" aria-expanded={open} aria-controls="menu" aria-label="Abrir menú" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav id="menu" className={open ? 'open' : ''} aria-label="Principal">
          {nav.filter((n) => n.id !== 'contacto').map((n) => (
            <a key={n.id} href={`#${n.id}`} aria-current={active === n.id ? 'true' : undefined} onClick={() => setOpen(false)}>{n.label}</a>
          ))}
          <a href="#contacto" className="btn btn-primary btn-sm" onClick={() => setOpen(false)}>Contacto</a>
        </nav>
      </div>
    </header>
  );
}
