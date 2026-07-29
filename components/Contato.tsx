"use client";

import ScrollReveal from "./ScrollReveal";
import { MessageCircle, Instagram, MapPin } from "lucide-react";

export default function Contato() {
  return (
    <section id="contato" className="px-6 py-24 md:px-10">
      <ScrollReveal>
        <p className="text-center font-body text-xs uppercase tracking-tag text-gold-dark">Fale com a gente</p>
        <h2 className="mt-2 text-center font-display text-4xl text-charcoal">Contato</h2>
      </ScrollReveal>

      <div className="mx-auto mt-12 grid max-w-3xl gap-5 md:grid-cols-3">
        <ScrollReveal delay={0.05}>
          <a href="https://wa.me/5544997296564" target="_blank" className="flex flex-col items-center gap-3 rounded-xl2 glass p-8 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-card">
            <MessageCircle className="text-gold-dark" size={22} strokeWidth={1.4} />
            <span className="font-body text-sm text-charcoal">(44) 99729-6564</span>
          </a>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <a href="https://instagram.com/raymodas70" target="_blank" className="flex flex-col items-center gap-3 rounded-xl2 glass p-8 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-card">
            <Instagram className="text-gold-dark" size={22} strokeWidth={1.4} />
            <span className="font-body text-sm text-charcoal">@raymodas70</span>
          </a><ScrollReveal delay={0.15}>
          <div className="flex flex-col items-center gap-3 rounded-xl2 glass p-8 text-center shadow-soft">
            <MapPin className="text-gold-dark" size={22} strokeWidth={1.4} />
            <span className="font-body text-sm text-charcoal">Loja 100% online</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
        </ScrollReveal>
