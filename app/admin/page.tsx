const stats = [
  { label: "Vendas hoje", valor: "R$ 0,00" },
  { label: "Pedidos pendentes", valor: "0" },
  { label: "Produtos ativos", valor: "0" },
  { label: "Estoque baixo", valor: "0" },
];

export default function AdminDashboard() {
  return (
    <div>
      <p className="font-body text-xs uppercase tracking-tag text-gold-dark">Painel</p>
      <h1 className="mt-1 font-display text-3xl text-charcoal">Visão geral</h1>

      <div className="mt-8 grid gap-5 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl2 bg-cream/50 p-6 shadow-soft">
            <p className="font-body text-xs uppercase tracking-tag text-charcoal/50">{s.label}</p>
            <p className="mt-2 font-display text-3xl text-charcoal">{s.valor}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl2 border border-dashed border-taupe p-10 text-center">
        <p className="font-body text-sm text-charcoal/50">
          Assim que o Supabase estiver conectado, os números reais de vendas,
          estoque e pedidos aparecem aqui automaticamente.
        </p>
      </div>
    </div>
  );
}
