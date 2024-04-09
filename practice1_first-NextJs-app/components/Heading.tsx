import type { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
}

export default function Heading({ children }: HeadingProps) {
  return <h1 className="text-2xl font-bold font-orbitron">{children}</h1>;
}
