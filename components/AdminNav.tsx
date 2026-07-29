"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LayoutGrid, Package, Warehouse, Users, Truck, Receipt } from "lucide-react";

const links = [
  { href: "/admin", label: "Visão geral", icon: LayoutGrid },
  { href: "/admin/produtos", label: "Produtos", icon: Package },
  { href: "/admin/estoque", label: "Estoque", icon: Warehouse },
  { href: "/admin/clientes", label: "Clientes", icon: Users },
  { href: "/admin/fornecedores", label: "Fornecedores", icon: Truck },
  { href: "/admin/vendas", label: "Vendas", icon: Receipt },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <aside className="flex w-60 flex-shrink-0 flex-col gap-1 border-r border-taupe/60 bg-cream/40 p-6">
      <div className="mb-8 flex items-center gap-3">
        <Image src="/logo/logo-preta.png" alt="Ray Modas" width={32} height={32} className="h-8 w-8 object-contain" />
        <span className="font-display text-lg text-charcoal">Ray Modas</span>
      </div>
      {links.map(({ href, label, icon: Icon }) => {
        const ativo = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 rounded-full px-4 py-2.5 font-body text-sm transition ${
              ativo ? "bg-charcoal text-ivory shadow-soft" : "text-charcoal/60 hover:bg-taupe/40"
            }`}
          >
            <Icon size={16} strokeWidth={1.6} />
            {label}
          </Link>
        );
      })}
    </aside>
  );
}
