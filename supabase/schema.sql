-- ============================================
-- RAY MODAS — Schema completo do banco de dados
-- Loja online + PDV + Estoque + Clientes + Fornecedores + Recibos
-- ============================================

-- Extensão para gerar UUIDs
create extension if not exists "uuid-ossp";

-- ============================================
-- USUÁRIOS (admin / operador de caixa)
-- ============================================
create table usuarios (
  id uuid primary key default uuid_generate_v4(),
  auth_id uuid references auth.users(id) on delete cascade,
  nome text not null,
  email text unique not null,
  papel text not null default 'operador' check (papel in ('admin', 'operador')),
  criado_em timestamptz default now()
);

-- ============================================
-- FORNECEDORES
-- ============================================
create table fornecedores (
  id uuid primary key default uuid_generate_v4(),
  nome text not null,
  cnpj_cpf text,
  telefone text,
  email text,
  endereco text,
  observacoes text,
  ativo boolean default true,
  criado_em timestamptz default now()
);

-- ============================================
-- CATEGORIAS DE PRODUTO
-- ============================================
create table categorias (
  id uuid primary key default uuid_generate_v4(),
  nome text not null unique,
  slug text not null unique,
  ordem integer default 0
);

-- ============================================
-- PRODUTOS
-- ============================================
create table produtos (
  id uuid primary key default uuid_generate_v4(),
  nome text not null,
  slug text not null unique,
  descricao text,
  preco numeric(10,2) not null,
  preco_promocional numeric(10,2),
  categoria_id uuid references categorias(id),
  fornecedor_id uuid references fornecedores(id),
  tamanhos text[] default '{}',
  cores text[] default '{}',
  sku text unique,
  estoque_atual integer not null default 0,
  estoque_minimo integer not null default 3,
  fotos text[] default '{}',
  ativo boolean default true,
  destaque boolean default false,
  criado_em timestamptz default now(),
  atualizado_em timestamptz default now()
);

create index idx_produtos_categoria on produtos(categoria_id);
create index idx_produtos_ativo on produtos(ativo);

-- ============================================
-- CLIENTES
-- ============================================
create table clientes (
  id uuid primary key default uuid_generate_v4(),
  auth_id uuid references auth.users(id) on delete set null,
  nome text not null,
  telefone text,
  email text,
  cpf text,
  endereco text,
  cidade text,
  cep text,
  criado_em timestamptz default now()
);

-- ============================================
-- VENDAS (cobre loja online E PDV)
-- ============================================
create table vendas (
  id uuid primary key default uuid_generate_v4(),
  numero serial unique,
  origem text not null check (origem in ('loja_online', 'pdv')),
  cliente_id uuid references clientes(id),
  operador_id uuid references usuarios(id),
  status text not null default 'pendente'
    check (status in ('pendente', 'pago', 'cancelado', 'enviado', 'entregue')),
  forma_pagamento text check (forma_pagamento in ('pix', 'cartao', 'dinheiro')),
  subtotal numeric(10,2) not null default 0,
  desconto numeric(10,2) not null default 0,
  total numeric(10,2) not null default 0,
  endereco_entrega text,
  observacoes text,
  criado_em timestamptz default now()
);

create table venda_itens (
  id uuid primary key default uuid_generate_v4(),
  venda_id uuid references vendas(id) on delete cascade,
  produto_id uuid references produtos(id),
  quantidade integer not null check (quantidade > 0),
  tamanho text,
  cor text,
  preco_unitario numeric(10,2) not null,
  subtotal numeric(10,2) not null
);

create index idx_venda_itens_venda on venda_itens(venda_id);

-- ============================================
-- MOVIMENTAÇÃO DE ESTOQUE
-- ============================================
create table movimentacao_estoque (
  id uuid primary key default uuid_generate_v4(),
  produto_id uuid references produtos(id) on delete cascade,
  tipo text not null check (tipo in ('entrada', 'saida', 'ajuste')),
  quantidade integer not null,
  motivo text not null,
  venda_id uuid references vendas(id),
  fornecedor_id uuid references fornecedores(id),
  usuario_id uuid references usuarios(id),
  observacoes text,
  criado_em timestamptz default now()
);

create index idx_movimentacao_produto on movimentacao_estoque(produto_id);

-- ============================================
-- RECIBOS
-- ============================================
create table recibos (
  id uuid primary key default uuid_generate_v4(),
  venda_id uuid references vendas(id) on delete cascade unique,
  numero_recibo text not null unique,
  url_pdf text,
  criado_em timestamptz default now()
);

-- ============================================
-- FUNÇÃO: gerar número de recibo automaticamente após pagamento
--
