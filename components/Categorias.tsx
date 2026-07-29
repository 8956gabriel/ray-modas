"use client";

import ScrollReveal from "./ScrollReveal";

const categorias = ["Vestidos", "Alfaiataria", "Blusas", "Calças", "Acessórios"];

export default function Categorias() {
  return (
    <section className="px-6 py-24 md:px-10">
      <ScrollReveal>
        <p className="text-center font-body text-xs uppercase tracking-tag text-gold-dark">Explore</p>
        <h2 className="mt-2 text-center font-display text-4xl text-charcoal">Categorias</h2>
      </ScrollReveal>

      <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-5">
        {categorias.map((cat, i) => (
          <ScrollReveal key={cat} delay={i * 0.08}>
            <div className="group cursor-pointer overflow-hidden rounded-xl2 bg-taupe/40 shadow-soft transition hover:-translate-y-1 hover:shadow-card">
              <div className="flex aspect-square items-center justify-center">
                <span className="font-display text-lg italic text-charcoal/50 transition group-hover:text-gold-dark">
                  {cat}
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
