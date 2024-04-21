"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className: string;
  prefetch?: boolean;
}

export default function NavLink({
  href,
  prefetch = true,
  children,
  className,
}: NavLinkProps) {
  const pathName = usePathname();

  // console.log(pathName);

  return (
    <Link
      href={href}
      prefetch={prefetch}
      className={className + `${href === pathName ? " underline" : ""}`}
    >
      {children}
    </Link>
  );
}
