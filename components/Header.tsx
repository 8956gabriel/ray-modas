"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ShoppingBag, Search, User, Heart } from "lucide-react";
import { useCarrinho } from "@/lib/cart-context";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { itens } = useCarrinho();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "glass shadow-soft py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo/logo-preta.png" alt="Ray Modas" width={44} height={44} className="h-11 w-11 object-contain" />
          <span className="font-display text-2xl tracking-wide text-charcoal">Ray Modas</span>
        </Link>

        <nav className="hidden gap-10 font-body text-[13px] uppercase tracking-tag text-charcoal/70 md:flex">
          <Link href="/loja" className="transition hover:text-gold-dark">Coleção</Link>
          <Link href="/loja?f=novidades" className="transition hover:text-gold-dark">Novidades</Link>
          <Link href="/loja?f=mais-vendidos" className="transition hover:text-gold-dark">Mais vendidos</Link>
          <Link href="/#sobre" className="transition hover:text-gold-dark">Sobre</Link>
          <Link href="/#contato" className="transition hover:text-gold-dark">Contato</Link>
        </nav>

        <div className="flex items-center gap-5 text-charcoal">
          <button aria-label="Buscar" className="transition hover:text-gold-dark"><Search size={19} strokeWidth={1.4} /></button>
          <button aria-label="Favoritos" className="transition hover:text-gold-dark"><Heart size={19} strokeWidth={1.4} /></button>
          <Link href="/conta" aria-label="Minha conta" className="transition hover:text-gold-dark"><User size={19} strokeWidth={1.4} /></Link>
          <Link href="/carrinho" aria-label="Sacola" className="relative transition hover:text-gold-dark">
            <ShoppingBag size={19} strokeWidth={1.4} />
            {itens.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] text-white">
                {itens.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
