"use client";

import ScrollReveal from "./ScrollReveal";
import { Star } from "lucide-react";

const depoimentos = [
  { nome: "Camila R.", texto: "Peças impecáveis e um atendimento que faz toda a diferença. Virei cliente fiel." },
  { nome: "Fernanda L.", texto: "A qualidade do tecido e o caimento são de outro nível. Recebi muitos elogios." },
  { nome: "Beatriz M.", texto: "Site lindo, compra fácil e entrega rápida. Superou minhas expectativas." },
];

export default function Depoimentos() {
  return (
    <section className="bg-cream px-6 py-24 md:px-10">
      <ScrollReveal>
        <p className="text-center font-body text-xs uppercase tracking-tag text-gold-dark">Clientes Ray</p>
        <h2 className="mt-2 text-center font-display text-4xl text-charcoal">O que elas dizem</h2>
      </ScrollReveal>

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
        {depoimentos.map((d, i) => (
          <ScrollReveal key={d.nome} delay={i * 0.1}>
            <div className="glass h-full rounded-xl2 p-7 shadow-soft">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 font-display text-lg italic leading-relaxed text-charcoal/80">
                &ldquo;{d.texto}&rdquo;
              </p>
              <p className="mt-5 font-body text-xs uppercase tracking-tag text-charcoal/40">{d.nome}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
