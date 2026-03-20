import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { CartProvider } from "@/contexts/cart-context";

const nunito = Nunito({
  fallback: ["system-ui", "arial", "sans-serif"],
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bubblify",
  description: "A bubbles app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        <CartProvider>
          <NavBar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
