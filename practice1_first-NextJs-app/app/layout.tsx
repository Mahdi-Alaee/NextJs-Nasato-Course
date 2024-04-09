import Link from "next/link";
import type { ReactNode } from "react";
import "./globals.css";
import NavBar from "../components/NavBar";
import { exo2, orbitron } from "./fonts";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className="px-4 py-2 bg-orange-50 flex flex-col gap-y-3 h-screen">
        <header>
          <NavBar />
        </header>
        <main className="grow">{children}</main>
        <footer className="py-2 text-center text-xs border-t">
          game data and images originate from{" "}
          <Link
            className="text-orange-800 hover:underline"
            href="https://digikala.com"
          >
            RAWG
          </Link>
        </footer>
      </body>
    </html>
  );
}
