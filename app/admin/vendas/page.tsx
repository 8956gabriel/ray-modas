export default function AdminVendas() {
  return (
    <div>
      <p className="font-body text-xs uppercase tracking-tag text-gold-dark">Histórico</p>
      <h1 className="mt-1 font-display text-3xl text-charcoal">Vendas</h1>

      <div className="mt-8 overflow-hidden rounded-xl2 shadow-soft">
        <table className="w-full border-collapse bg-cream/40 text-left font-body text-sm">
          <thead>
            <tr className="border-b border-taupe/60 text-xs uppercase tracking-tag text-charcoal/50">
              <th className="px-5 py-4">Nº</th>
              <th className="px-5 py-4">Origem</th>
              <th className="px-5 py-4">Cliente</th>
              <th className="px-5 py-4">Pagamento</th>
              <th className="px-5 py-4">Total</th>
              <th className="px-5 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={6} className="px-5 py-8 text-center text-charcoal/40">
                Nenhuma venda registrada ainda.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
