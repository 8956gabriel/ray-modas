import { produtosDestaque } from "@/lib/mock-data";
import { Plus } from "lucide-react";

export default function AdminEstoque() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-body text-xs uppercase tracking-tag text-gold-dark">Controle</p>
          <h1 className="mt-1 font-display text-3xl text-charcoal">Estoque</h1>
        </div>
        <button className="flex items-center gap-2 rounded-full bg-charcoal px-5 py-2.5 font-body text-sm text-ivory shadow-soft transition hover:bg-gold-dark">
          <Plus size={16} /> Registrar entrada
        </button>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl2 shadow-soft">
        <table className="w-full border-collapse bg-cream/40 text-left font-body text-sm">
          <thead>
            <tr className="border-b border-taupe/60 text-xs uppercase tracking-tag text-charcoal/50">
              <th className="px-5 py-4">Produto</th>
              <th className="px-5 py-4">Estoque atual</th>
              <th className="px-5 py-4">Estoque mínimo</th>
              <th className="px-5 py-4">Situação</th>
            </tr>
          </thead>
          <tbody>
            {produtosDestaque.map((p) => (
              <tr key={p.id} className="border-b border-taupe/40 text-charcoal">
                <td className="px-5 py-4">{p.nome}</td>
                <td className="px-5 py-4">—</td>
                <td className="px-5 py-4 text-charcoal/60">3</td>
                <td className="px-5 py-4">
                  <span className="rounded-full bg-taupe/50 px-3 py-1 text-xs text-charcoal/60">A conectar</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
