"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-taupe/60 bg-cream px-6 py-14 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-3">
          <Image src="/logo/logo-preta.png" alt="Ray Modas" width={36} height={36} className="h-9 w-9 object-contain" />
          <span className="font-display text-xl text-charcoal">Ray Modas</span>
        </div>
        <nav className="flex gap-6 font-body text-xs uppercase tracking-tag text-charcoal/50">
          <Link href="/loja" className="hover:text-gold-dark">Coleção</Link>
          <Link href="/#sobre" className="hover:text-gold-dark">Sobre</Link>
          <Link href="/#contato" className="hover:text-gold-dark">Contato</Link>
        </nav>
        <p className="font-body text-[11px] uppercase tracking-tag text-charcoal/35">
          © Ray Modas — todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
