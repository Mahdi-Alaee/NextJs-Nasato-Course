import Link from "next/link";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <header>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/reviews">Reviews</Link>
            </li>
          </ul>
        </header>
        <main>{children}</main>
        <footer>[footer]</footer>
      </body>
    </html>
  );
}
