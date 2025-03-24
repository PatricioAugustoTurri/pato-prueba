import type { Metadata } from "next";
import { Spicy_Rice, Oi } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Pato Turri",
  description: "Pato Turri",
};

const spicyRice = Spicy_Rice({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
})

export const oi = Oi({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin", "arabic", "cyrillic"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spicyRice.className}`}>
        <header className="relative z-10">
          <NavBar />
        </header>
        <main className="mt-52 h-auto">
          {children}
          <Toaster />
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
