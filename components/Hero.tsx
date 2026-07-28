"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex h-screen items-center justify-center overflow-hidden bg-cream">
      <motion.div style={{ y }} className="absolute inset-0 bg-gradient-to-b from-taupe/40 via-cream to-ivory" />

      <motion.div style={{ opacity }} className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <Image src="/logo/logo-preta.png" alt="Ray Modas" width={120} height={120} className="mx-auto h-28 w-28 object-contain md:h-36 md:w-36" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 font-body text-xs uppercase tracking-tag text-gold-dark"
        >
          Coleção Primavera — Elegância atemporal
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 max-w-2xl font-display text-5xl leading-[1.1] text-charcoal md:text-7xl"
        >
          Moda feminina com <span className="italic text-gold-dark">alma</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 max-w-md font-body text-base text-charcoal/60"
        >
          Peças exclusivas, cuidadosamente escolhidas para quem valoriza
          sofisticação em cada detalhe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex gap-4"
        >
          <Link
            href="/loja"
            className="rounded-full bg-charcoal px-9 py-3.5 font-body text-sm uppercase tracking-tag text-ivory shadow-card transition hover:-translate-y-0.5 hover:bg-gold-dark"
          >
            Ver coleção
          </Link>
          <Link
            href="/#sobre"
            className="glass rounded-full px-9 py-3.5 font-body text-sm uppercase tracking-tag text-charcoal shadow-soft transition hover:-translate-y-0.5"
          >
            Nossa história
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
