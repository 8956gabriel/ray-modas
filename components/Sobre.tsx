"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Sobre() {
  return (
    <section id="sobre" className="bg-cream px-6 py-24 md:px-10">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <ScrollReveal>
          <div className="flex aspect-square items-center justify-center rounded-xl2 bg-ivory shadow-card">
            <Image src="/logo/logo-preta.png" alt="Ray Modas" width={180} height={180} className="h-40 w-40 object-contain md:h-52 md:w-52" />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="font-body text-xs uppercase tracking-tag text-gold-dark">Nossa história</p>
          <h2 className="mt-3 font-display text-4xl text-charcoal">Sobre a Ray Modas</h2>
          <p className="mt-6 font-body text-base leading-relaxed text-charcoal/60">
            A Ray Modas nasceu do desejo de vestir mulheres com peças que
            unem sofisticação e autenticidade. Cada coleção é pensada com
            atenção aos detalhes, tecidos selecionados e um olhar cuidadoso
            para o caimento perfeito.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-charcoal/60">
            Mais do que moda, entregamos confiança — para que cada cliente
            se sinta única em cada ocasião.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
