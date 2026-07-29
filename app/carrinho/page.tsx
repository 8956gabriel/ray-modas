"use client";

import Header from "@/components/Header";
import { useCarrinho } from "@/lib/cart-context";
import Link from "next/link";

function formatarPreco(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function CarrinhoPage() {
  const { itens, removerItem, atualizarQuantidade, total } = useCarrinho();

  if (itens.length === 0) {
    return (
      <main className="min-h-screen bg-ivory">
        <Header />
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 pt-24 text-center">
          <p className="font-body text-xs uppercase tracking-tag text-gold-dark">Sacola</p>
          <h1 className="mt-3 font-display text-3xl text-charcoal">Sua sacola está vazia</h1>
          <Link href="/loja" className="mt-8 rounded-full bg-charcoal px-8 py-3 font-body text-sm uppercase tracking-tag text-ivory shadow-card transition hover:bg-gold-dark">
            Ver coleção
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-ivory">
      <Header />
      <section className="px-6 pb-20 pt-28 md:px-10 md:pt-36">
        <p className="font-body text-xs uppercase tracking-tag text-gold-dark">Sacola</p>
        <h1 className="mt-2 font-display text-4xl text-charcoal">Sua sacola</h1>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          <div className="space-y-5 md:col-span-2">
            {itens.map((item) => (
              <div key={`${item.produtoId}-${item.tamanho}-${item.cor}`} className="flex items-center gap-4 rounded-xl2 bg-cream/60 p-4 shadow-soft">
                <div className="h-24 w-20 flex-shrink-0 rounded-lg bg-taupe/50" />
                <div className="flex-1">
                  <h3 className="font-display text-base text-charcoal">{item.nome}</h3>
                  <p className="mt-1 font-body text-[11px] uppercase tracking-tag text-charcoal/40">{item.cor} · {item.tamanho}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <select
                      value={item.quantidade}
                      onChange={(e) => atualizarQuantidade(item.produtoId, item.tamanho, item.cor, Number(e.target.value))}
                      className="rounded-full border border-taupe bg-ivory px-3 py-1 font-body text-sm text-charcoal"
                    >
                      {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}</option>)}
                    </select>
                    <button onClick={() => removerItem(item.produtoId, item.tamanho, item.cor)} className="font-body text-xs uppercase tracking-tag text-charcoal/35 transition hover:text-gold-dark">
                      Remover
                    </button>
                  </div>
                </div>
                <p className="font-body text-sm text-charcoal">{formatarPreco(item.preco * item.quantidade)}</p>
              </div>
            ))}
          </div>

          <div className="h-fit rounded-xl2 glass p-6 shadow-soft">
            <div className="flex justify-between font-body text-sm text-charcoal/70">
              <span>Subtotal</span>
              <span>{formatarPreco(total)}</span>
            </div>
            <p className="mt-2 font-body text-xs text-charcoal/40">Frete calculado no checkout</p>
            <Link href="/checkout" className="mt-6 block rounded-full bg-charcoal py-4 text-center font-body text-sm uppercase tracking-tag text-ivory shadow-card transition hover:bg-gold-dark">
              Finalizar compra
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
