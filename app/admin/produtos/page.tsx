import { produtosDestaque } from "@/lib/mock-data";
import { Plus } from "lucide-react";

function formatarPreco(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function AdminProdutos() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-body text-xs uppercase tracking-tag text-gold-dark">Catálogo</p>
          <h1 className="mt-1 font-display text-3xl text-charcoal">Produtos</h1>
        </div>
        <button className="flex items-center gap-2 rounded-full bg-charcoal px-5 py-2.5 font-body text-sm text-ivory shadow-soft transition hover:bg-gold-dark">
          <Plus size={16} /> Novo produto
        </button>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl2 shadow-soft">
        <table className="w-full border-collapse bg-cream/40 text-left font-body text-sm">
          <thead>
            <tr className="border-b border-taupe/60 text-xs uppercase tracking-tag text-charcoal/50">
              <th className="px-5 py-4">Produto</th>
              <th className="px-5 py-4">Categoria</th>
              <th className="px-5 py-4">Preço</th>
              <th className="px-5 py-4">Estoque</th>
              <th className="px-5 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {produtosDestaque.map((p) => (
              <tr key={p.id} className="border-b border-taupe/40 text-charcoal">
                <td className="px-5 py-4">{p.nome}</td>
                <td className="px-5 py-4 text-charcoal/60">{p.categoria}</td>
                <td className="px-5 py-4">{formatarPreco(p.precoPromocional ?? p.preco)}</td>
                <td className="px-5 py-4 text-charcoal/60">—</td>
                <td className="px-5 py-4">
                  <span className="rounded-full bg-gold/20 px-3 py-1 text-xs text-gold-dark">Ativo</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
