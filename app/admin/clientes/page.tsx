import { Plus } from "lucide-react";

export default function AdminClientes() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-body text-xs uppercase tracking-tag text-gold-dark">Relacionamento</p>
          <h1 className="mt-1 font-display text-3xl text-charcoal">Clientes</h1>
        </div>
        <button className="flex items-center gap-2 rounded-full bg-charcoal px-5 py-2.5 font-body text-sm text-ivory shadow-soft transition hover:bg-gold-dark">
          <Plus size={16} /> Novo cliente
        </button>
      </div>

      <div className="mt-8 rounded-xl2 border border-dashed border-taupe p-10 text-center">
        <p className="font-body text-sm text-charcoal/50">
          Nenhum cliente cadastrado ainda. Os clientes aparecem aqui
          automaticamente após a primeira compra na loja ou cadastro no PDV.
        </p>
      </div>
    </div>
  );
}
