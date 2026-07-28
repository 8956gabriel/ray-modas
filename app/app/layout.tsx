import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { CarrinhoProvider } from "@/lib/cart-context";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Ray Modas",
  description: "Ray Modas — moda feminina, elegância atemporal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${cormorant.variable} ${inter.variable} font-body antialiased bg-ivory`}>
        <CarrinhoProvider>{children}</CarrinhoProvider>
      </body>
    </html>
  );
}
