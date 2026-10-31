export type Level = 'proyectos' | 'practico' | 'aprendizaje';

export const levelLabels: Record<Level, string> = {
  proyectos: 'Lo uso en mis proyectos',
  practico: 'Conocimiento práctico',
  aprendizaje: 'En aprendizaje',
};

export const profile = {
  name: 'Federico Marcenac',
  email: '', // Completá tu correo acá (ej: 'tu@correo.com') y se activa solo el botón y el enlace.
  photo: '', // Ruta de tu foto (ej: '/foto.jpg' dentro de /public). Vacío = monograma.
  linkedin: 'https://www.linkedin.com/in/federico-marcenac-546ab228b/',
  github: 'https://github.com/FedericoMarcenac',
};

export const nav = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'tecnologias', label: 'Tecnologías' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'formacion', label: 'Formación' },
  { id: 'contacto', label: 'Contacto' },
];

// IMPORTANTE: los niveles son una asignación inicial según lo que contaste. Ajustalos a tu realidad.
export const techGroups: { title: string; items: [string, Level][] }[] = [
  { title: 'Desarrollo web', items: [['HTML5', 'proyectos'], ['CSS3', 'proyectos'], ['Bootstrap', 'proyectos'], ['Sass / SCSS', 'aprendizaje'], ['JavaScript', 'aprendizaje'], ['TypeScript', 'aprendizaje'], ['React', 'aprendizaje'], ['Node.js', 'aprendizaje'], ['Express', 'aprendizaje']] },
  { title: 'Bases de datos', items: [['SQL', 'aprendizaje'], ['PostgreSQL', 'aprendizaje'], ['SQLite', 'aprendizaje']] },
  { title: 'Lenguajes', items: [['Python', 'aprendizaje'], ['C++', 'aprendizaje'], ['Pascal', 'aprendizaje']] },
  { title: 'Herramientas', items: [['Git', 'proyectos'], ['GitHub', 'proyectos'], ['Visual Studio Code', 'proyectos'], ['Docker', 'aprendizaje']] },
  { title: 'Automatización y productividad', items: [['Excel avanzado', 'practico'], ['Macros', 'practico'], ['VBA', 'practico'], ['Procesamiento de datos', 'practico']] },
  { title: 'Otros conocimientos', items: [['Fundamentos de ciberseguridad', 'aprendizaje'], ['Edición de video', 'practico'], ['SEO básico', 'practico']] },
];

export type Project = {
  name: string; description: string; features: string[]; stack: string[];
  status: string; repo: string; demo?: string; images: string[]; // capturas en /public/img (la primera es la principal)
};

// Para sumar un proyecto, copiá un bloque y agregalo a esta lista.
export const projects: Project[] = [
  {
    name: 'Ettonazzem',
    description: 'Sitio web para un comercio real de librería comercial y escolar, computación y descartables.',
    features: ['Productos organizados por categorías', 'Información del comercio', 'Navegación entre secciones', 'Diseño responsive', 'Contacto por WhatsApp'],
    stack: ['HTML5', 'CSS3', 'Bootstrap 5.3.1'], status: 'Publicado',
    images: ['img/etto-1.webp', 'img/etto-2.webp', 'img/etto-3.webp'],
    repo: 'https://github.com/FedericoMarcenac/paginaEttonazzem',
    demo: 'https://federicomarcenac.github.io/paginaEttonazzem/index.html',
  },
  {
    name: 'Portfolio personal anterior',
    description: 'Sitio personal para presentar mi perfil y servicios.',
    features: ['Página de inicio', 'Sección sobre mí', 'Sección de presupuesto', 'Página de contacto', 'Diseño responsive'],
    stack: ['HTML5', 'CSS3', 'Bootstrap', 'Git y GitHub'], status: 'Publicado',
    images: ['img/fede-1.webp', 'img/fede-2.webp', 'img/fede-3.webp'],
    repo: 'https://github.com/FedericoMarcenac/fedePagina',
    demo: 'https://federicomarcenac.github.io/fedePagina/index.html',
  },
];

export const support = [
  { title: 'Mantenimiento de PC', text: 'Diagnóstico, formateo, instalación de sistemas y actualización de componentes.' },
  { title: 'Software', text: 'Instalación y configuración de Windows y programas.' },
  { title: 'Hardware', text: 'Identificación y resolución de problemas de componentes.' },
  { title: 'Impresoras', text: 'Instalación, configuración y solución de problemas de impresión.' },
  { title: 'Redes', text: 'Configuración de redes locales y conexiones Wi-Fi.' },
  { title: 'Asistencia técnica', text: 'Diagnóstico y resolución de problemas informáticos.' },
];

export const education = [
  { school: 'UTN, Universidad Tecnológica Nacional', title: 'Tecnicatura Universitaria en Programación', detail: 'UTN Facultad Regional Bahía Blanca', status: 'En curso' },
  { school: 'Universidad Nacional del Sur', title: 'Licenciatura en Ciencias de la Computación', detail: 'Un año cursado', status: 'Cursada parcial' },
  { school: 'Coderhouse', title: 'Cursos de Desarrollo Web, Backend y Ciberseguridad', detail: 'Cursos realizados', status: 'Realizados' },
];

export const experience = {
  title: 'Colaboración en gestión comercial y soporte tecnológico',
  context: 'Experiencia práctica en un negocio familiar.',
  tasks: [
    'Búsqueda y selección de productos tecnológicos', 'Comparación de precios y proveedores',
    'Elaboración de cotizaciones', 'Actualización de precios y reposición',
    'Control de caja y gastos mediante Excel', 'Registro de movimientos y depósitos',
    'Entregas y asistencia a clientes', 'Reparación y soporte de PC e impresoras',
  ],
};
