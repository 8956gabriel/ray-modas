"use client";

import { useState } from "react";
import Image from "next/image";
import { produtosDestaque, Produto } from "@/lib/mock-data";

function formatarPreco(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

type ItemVenda = { produto: Produto; quantidade: number };

export default function PDVPage() {
  const [busca, setBusca] = useState("");
  const [itens, setItens] = useState<ItemVenda[]>([]);
  const [pagamento, setPagamento] = useState<"pix" | "cartao" | "dinheiro">("pix");

  const resultados = produtosDestaque.filter((p) =>
    p.nome.toLowerCase().includes(busca.toLowerCase())
  );

  function adicionar(produto: Produto) {
    setItens((atual) => {
      const existente = atual.find((i) => i.produto.id === produto.id);
      if (existente) {
        return atual.map((i) =>
          i.produto.id === produto.id ? { ...i, quantidade: i.quantidade + 1 } : i
        );
      }
      return [...atual, { produto, quantidade: 1 }];
    });
    setBusca("");
  }

  function remover(produtoId: string) {
    setItens((atual) => atual.filter((i) => i.produto.id !== produtoId));
  }

  const total = itens.reduce(
    (soma, i) => soma + (i.produto.precoPromocional ?? i.produto.preco) * i.quantidade,
    0
  );

  return (
    <main className="min-h-screen bg-ivory p-6 md:p-10">
      <div className="mb-8 flex items-center gap-3">
        <Image src="/logo/logo-preta.png" alt="Ray Modas" width={36} height={36} className="h-9 w-9 object-contain" />
        <div>
          <p className="font-body text-xs uppercase tracking-tag text-gold-dark">PDV · Balcão</p>
          <h1 className="font-display text-3xl text-charcoal">Nova venda</h1>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <input
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar produto por nome ou SKU..."
            className="w-full rounded-full border border-taupe bg-cream/40 px-5 py-3 font-body text-charcoal placeholder:text-charcoal/40 shadow-soft focus:border-gold-dark focus:outline-none"
          />

          {busca && (
            <div className="mt-3 overflow-hidden rounded-xl2 border border-taupe shadow-soft">
              {resultados.length === 0 && (
                <p className="p-4 font-body text-sm text-charcoal/50">Nenhum produto encontrado.</p>
              )}
              {resultados.map((p) => (
                <button
                  key={p.id}
                  onClick={() => adicionar(p)}
                  className="flex w-full items-center justify-between border-b border-taupe/60 bg-ivory px-4 py-3 text-left transition hover:bg-cream"
                >
                  <span className="font-body text-sm text-charcoal">{p.nome}</span>
                  <span className="font-body text-sm text-gold-dark">
                    {formatarPreco(p.precoPromocional ?? p.preco)}
                  </span>
                </button>
              ))}
            </div>
          )}

          <div className="mt-8 space-y-3">
            {itens.length === 0 && (
              <p className="font-body text-sm text-charcoal/40">
                Busque um produto acima para adicionar à venda.
              </p>
            )}
            {itens.map((item) => (
              <div
                key={item.produto.id}
                className="flex items-center justify-between rounded-xl2 bg-cream/50 p-4 shadow-soft"
              >
                <div>
                  <p className="font-body text-sm text-charcoal">{item.produto.nome}</p>
                  <p className="font-body text-xs text-charcoal/50">
                    {item.quantidade}x {formatarPreco(item.produto.precoPromocional ?? item.produto.preco)}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-body text-sm text-charcoal">
                    {formatarPreco((item.produto.precoPromocional ?? item.produto.preco) * item.quantidade)}
                  </p>
                  <button
                    onClick={() => remover(item.produto.id)}
                    className="font-body text-xs uppercase text-charcoal/40 transition hover:text-gold-dark"
                  >
                    remover
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-fit rounded-xl2 glass p-6 shadow-card">
          <p className="font-body text-xs uppercase tracking-tag text-charcoal/60">Forma de pagamento</p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {(["pix", "cartao", "dinheiro"] as const).map((forma) => (
              <button
                key={forma}
                onClick={() => setPagamento(forma)}
                className={`rounded-full border py-2 font-body text-xs uppercase transition ${
                  pagamento === forma
                    ? "border-gold-dark text-gold-dark bg-ivory"
                    : "border-taupe text-charcoal/50 hover:border-charcoal/40"
                }`}
              >
                {forma}
              </button>
            ))}
          </div>

          <div className="mt-6 flex justify-between font-body text-sm text-charcoal/70">
            <span>Total</span>
            <span className="text-lg text-charcoal">{formatarPreco(total)}</span>
          </div>

          <button
            disabled={itens.length === 0}
            className="mt-6 w-full rounded-full bg-charcoal py-4 font-body text-sm uppercase tracking-tag text-ivory shadow-card transition hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-30"
          >
            Finalizar venda e emitir recibo
          </button>
        </div>
      </div>
    </main>
  );
}
