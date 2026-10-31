import type { ReactNode } from 'react';

type Props = { id: string; title: string; intro?: string; children: ReactNode };

export default function Section({ id, title, intro, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-t`}>
      <div className="led" aria-hidden="true" />
      <div className="wrap">
        <header className="reveal sec-head">
          <h2 id={`${id}-t`}>{title}</h2>
          {intro && <p className="mute">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
