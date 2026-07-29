"use client";

import ScrollReveal from "./ScrollReveal";
import { Instagram } from "lucide-react";

export default function InstagramFeed() {
  return (
    <section className="px-6 py-24 md:px-10">
      <ScrollReveal>
        <div className="flex flex-col items-center text-center">
          <Instagram size={22} strokeWidth={1.3} className="text-gold-dark" />
          <h2 className="mt-3 font-display text-4xl text-charcoal">@raymodas70</h2>
          <p className="mt-2 font-body text-sm text-charcoal/50">Siga para novidades, bastidores e lançamentos</p>
        </div>
      </ScrollReveal>

      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-3 gap-3 md:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <div className="aspect-square rounded-xl2 bg-taupe/40 shadow-soft transition hover:-translate-y-1 hover:shadow-card" />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
