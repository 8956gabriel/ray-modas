"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type ItemCarrinho = {
  produtoId: string;
  nome: string;
  preco: number;
  tamanho: string;
  cor: string;
  quantidade: number;
};

type CarrinhoContextType = {
  itens: ItemCarrinho[];
  adicionarItem: (item: ItemCarrinho) => void;
  removerItem: (produtoId: string, tamanho: string, cor: string) => void;
  atualizarQuantidade: (produtoId: string, tamanho: string, cor: string, quantidade: number) => void;
  total: number;
};

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<ItemCarrinho[]>([]);

  function adicionarItem(novoItem: ItemCarrinho) {
    setItens((atual) => {
      const existente = atual.find(
        (i) => i.produtoId === novoItem.produtoId && i.tamanho === novoItem.tamanho && i.cor === novoItem.cor
      );
      if (existente) {
        return atual.map((i) =>
          i === existente ? { ...i, quantidade: i.quantidade + novoItem.quantidade } : i
        );
      }
      return [...atual, novoItem];
    });
  }

  function removerItem(produtoId: string, tamanho: string, cor: string) {
    setItens((atual) =>
      atual.filter((i) => !(i.produtoId === produtoId && i.tamanho === tamanho && i.cor === cor))
    );
  }

  function atualizarQuantidade(produtoId: string, tamanho: string, cor: string, quantidade: number) {
    setItens((atual) =>
      atual.map((i) =>
        i.produtoId === produtoId && i.tamanho === tamanho && i.cor === cor
          ? { ...i, quantidade }
          : i
      )
    );
  }

  const total = itens.reduce((soma, item) => soma + item.preco * item.quantidade, 0);

  return (
    <CarrinhoContext.Provider value={{ itens, adicionarItem, removerItem, atualizarQuantidade, total }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  const context = useContext(CarrinhoContext);
  if (!context) throw new Error("useCarrinho precisa estar dentro de CarrinhoProvider");
  return context;
}
