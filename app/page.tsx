import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import Categorias from "@/components/Categorias";
import Depoimentos from "@/components/Depoimentos";
import InstagramFeed from "@/components/InstagramFeed";
import Sobre from "@/components/Sobre";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import { produtosDestaque } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-ivory">
      <Header />
      <Hero />

      <section className="px-6 py-24 md:px-10">
        <ScrollReveal>
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="font-body text-xs uppercase tracking-tag text-gold-dark">Selecionados</p>
              <h2 className="mt-2 font-display text-4xl text-charcoal">Coleção em destaque</h2>
            </div>
            <a href="/loja" className="hidden font-body text-sm uppercase tracking-tag text-charcoal/50 transition hover:text-gold-dark md:block">
              Ver tudo →
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-4">
          {produtosDestaque.map((produto, i) => (
            <ScrollReveal key={produto.id} delay={i * 0.08}>
              <ProductCard produto={produto} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Categorias />
      <Depoimentos />
      <InstagramFeed />
      <Sobre />
      <Contato />
      <Footer />
    </main>
  );
}
