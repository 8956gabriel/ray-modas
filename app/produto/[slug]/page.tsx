import Header from "@/components/Header";
import { produtosDestaque } from "@/lib/mock-data";
import { notFound } from "next/navigation";

function formatarPreco(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function ProdutoPage({ params }: { params: { slug: string } }) {
  const produto = produtosDestaque.find((p) => p.slug === params.slug);
  if (!produto) return notFound();

  const temPromocao = !!produto.precoPromocional;

  return (
    <main className="min-h-screen bg-ivory">
      <Header />

      <section className="grid gap-10 px-6 pb-20 pt-32 md:grid-cols-2 md:px-10 md:pt-36">
        <div className="aspect-[3/4] rounded-xl2 bg-taupe/40 shadow-soft flex items-center justify-center">
          <span className="font-display italic text-charcoal/30">{produto.nome}</span>
        </div>

        <div className="max-w-md">
          <p className="font-body text-xs uppercase tracking-tag text-gold-dark">{produto.categoria}</p>
          <h1 className="mt-2 font-display text-4xl text-charcoal">{produto.nome}</h1>

          <div className="mt-4 flex items-center gap-3">
            {temPromocao ? (
              <>
                <span className="text-lg text-charcoal/35 line-through">{formatarPreco(produto.preco)}</span>
                <span className="text-2xl text-gold-dark">{formatarPreco(produto.precoPromocional!)}</span>
              </>
            ) : (
              <span className="text-2xl text-charcoal">{formatarPreco(produto.preco)}</span>
            )}
          </div>

          <div className="mt-8">
            <p className="mb-3 font-body text-xs uppercase tracking-tag text-charcoal/50">Cor</p>
            <div className="flex gap-3">
              {produto.cores.map((cor) => (
                <button key={cor} className="rounded-full border border-taupe px-4 py-2 font-body text-sm text-charcoal transition hover:border-gold-dark hover:text-gold-dark">
                  {cor}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-3 font-body text-xs uppercase tracking-tag text-charcoal/50">Tamanho</p>
            <div className="flex gap-3">
              {produto.tamanhos.map((tam) => (
                <button key={tam} className="h-10 w-10 rounded-full border border-taupe font-body text-sm text-charcoal transition hover:border-gold-dark hover:text-gold-dark">
                  {tam}
                </button>
              ))}
            </div>
          </div>

          <button className="mt-10 w-full rounded-full bg-charcoal py-4 font-body text-sm uppercase tracking-tag text-ivory shadow-card transition hover:bg-gold-dark">
            Adicionar à sacola
          </button>

          <p className="mt-6 font-body text-sm text-charcoal/45">
            Peça sob medida em estoque limitado. Pagamento via Pix ou cartão,
            finalização em ambiente seguro.
          </p>
        </div>
      </section>
    </main>
  );
}
