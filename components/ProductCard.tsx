"use client";

import Link from "next/link";
import { Produto } from "@/lib/mock-data";

function formatarPreco(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function ProductCard({ produto }: { produto: Produto }) {
  const temPromocao = !!produto.precoPromocional;

  return (
    <Link href={`/produto/${produto.slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl2 bg-taupe/50 shadow-soft transition-shadow duration-500 group-hover:shadow-card">
        <div className="absolute inset-0 flex items-center justify-center font-display text-sm italic text-charcoal/25 transition-transform duration-700 group-hover:scale-110">
          {produto.nome}
        </div>
        {temPromocao && (
          <span className="absolute left-4 top-4 rounded-full bg-charcoal px-3 py-1 font-body text-[10px] uppercase tracking-tag text-ivory">
            Promoção
          </span>
        )}
        {produto.destaque && !temPromocao && (
          <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 font-body text-[10px] uppercase tracking-tag text-charcoal">
            Novidade
          </span>
        )}
        <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="block rounded-full glass py-2.5 text-center font-body text-xs uppercase tracking-tag text-charcoal shadow-soft">
            Comprar agora
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between">
        <div>
          <h3 className="font-display text-base text-charcoal">{produto.nome}</h3>
          <p className="mt-1 font-body text-[11px] uppercase tracking-tag text-charcoal/40">{produto.categoria}</p>
        </div>
        <div className="text-right">
          {temPromocao ? (
            <>
              <p className="font-body text-xs text-charcoal/35 line-through">{formatarPreco(produto.preco)}</p>
              <p className="font-body text-sm text-gold-dark">{formatarPreco(produto.precoPromocional!)}</p>
            </>
          ) : (
            <p className="font-body text-sm text-charcoal">{formatarPreco(produto.preco)}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
