import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";

// Dynamically import the component on the client side
const CartStoreProvider = dynamic(() => import('@/providers/cart-store-provider'), {
  ssr: false,
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acme Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
  <CartStoreProvider>
  <main className="max-w-7xl relative w-full mx-auto">
          <Navbar />

          <section className=" px-4 py-16">{children}</section>
        </main>
  </CartStoreProvider>
      </body>
    </html>
  );
}
