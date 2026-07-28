export type Produto = {
  id: string;
  nome: string;
  slug: string;
  preco: number;
  precoPromocional?: number;
  categoria: string;
  cores: string[];
  tamanhos: string[];
  foto: string;
  destaque?: boolean;
};

export const produtosDestaque: Produto[] = [
  {
    id: "1",
    nome: "Blazer Alfaiataria Ink",
    slug: "blazer-alfaiataria-ink",
    preco: 429.9,
    categoria: "Alfaiataria",
    cores: ["Preto", "Grafite"],
    tamanhos: ["P", "M", "G", "GG"],
    foto: "/mock/blazer.jpg",
    destaque: true,
  },
  {
    id: "2",
    nome: "Vestido Linha Brass",
    slug: "vestido-linha-brass",
    preco: 349.9,
    precoPromocional: 289.9,
    categoria: "Vestidos",
    cores: ["Off-white", "Terracota"],
    tamanhos: ["P", "M", "G"],
    foto: "/mock/vestido.jpg",
    destaque: true,
  },
  {
    id: "3",
    nome: "Calça Wine Alfaiataria",
    slug: "calca-wine-alfaiataria",
    preco: 259.9,
    categoria: "Calças",
    cores: ["Vinho", "Preto"],
    tamanhos: ["36", "38", "40", "42"],
    foto: "/mock/calca.jpg",
    destaque: true,
  },
  {
    id: "4",
    nome: "Camisa Seda Stone",
    slug: "camisa-seda-stone",
    preco: 219.9,
    categoria: "Camisas",
    cores: ["Bege", "Branco"],
    tamanhos: ["P", "M", "G"],
    foto: "/mock/camisa.jpg",
    destaque: true,
  },
];
