import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Tech from './sections/Tech';
import Projects from './sections/Projects';
import Support from './sections/Support';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

export default function App() {
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    const root = document.documentElement.style;
    const move = (e: PointerEvent) => {
      root.setProperty('--mx', `${e.clientX}px`);
      root.setProperty('--my', `${e.clientY}px`);
      const c = (e.target as HTMLElement).closest<HTMLElement>('.card');
      if (c) {
        const b = c.getBoundingClientRect();
        c.style.setProperty('--x', `${e.clientX - b.left}px`);
        c.style.setProperty('--y', `${e.clientY - b.top}px`);
      }
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => { io.disconnect(); window.removeEventListener('pointermove', move); };
  }, []);

  return (
    <>
      <div className="ambient" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero /><About /><Tech /><Projects /><Support /><Education /><Experience /><Contact />
      </main>
      <footer className="foot"><div className="led" aria-hidden="true" />© {new Date().getFullYear()} Federico Marcenac · Bahía Blanca, Argentina</footer>
    </>
  );
}
