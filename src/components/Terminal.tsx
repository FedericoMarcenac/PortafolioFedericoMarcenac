import { useEffect, useState } from 'react';

const CODE = `const federico = {
  estudia: 'UTN Bahía Blanca',
  enfoque: ['web', 'soporte IT', 'ciberseguridad'],
  aprende: 'creando proyectos',
  disponible: true,
};`;

export default function Terminal() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [n, setN] = useState(reduce ? CODE.length : 0);

  useEffect(() => {
    if (n >= CODE.length) return;
    const t = setTimeout(() => setN(n + 1), 28);
    return () => clearTimeout(t);
  }, [n]);

  return (
    <div className="card terminal" role="img" aria-label="Fragmento de código que resume mi perfil">
      <div className="term-bar"><i /><i /><i /><span>perfil.ts</span></div>
      <pre aria-hidden="true">{CODE.slice(0, n)}<span className="caret" /></pre>
    </div>
  );
}
