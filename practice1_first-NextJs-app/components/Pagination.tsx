import Link from "next/link";
import type { ReactNode } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface PaginationProps {
  pageRoute: string;
  page: number;
  pagesCount: number;
}

interface PaginationLinkProps {
  children: ReactNode;
  href: string;
  enabled: boolean;
}

export default function Pagination({
  pageRoute,
  page,
  pagesCount,
}: PaginationProps) {
  return (
    <div className="flex gap-x-4 items-center justify-center">
      <PaginationLink href={`${pageRoute}?page=${page - 1}`} enabled={page > 1}>
        <FaArrowLeft />
      </PaginationLink>
      <span className="sr-only">previous page</span>
      {/* page number */}
      <span className="text-xl">
        page {page} of {pagesCount}
      </span>
      <PaginationLink
        href={`${pageRoute}?page=${page + 1}`}
        enabled={page < pagesCount}
      >
        <FaArrowRight />
      </PaginationLink>
      <span className="sr-only">next page</span>
    </div>
  );
}

function PaginationLink({ children, href, enabled }: PaginationLinkProps) {
  if (enabled) {
    return (
      <Link
        className="border p-2 rounded text-orange-600 hover:text-orange-700 
      hover:bg-orange-200"
        href={href}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <span
        className="border p-2 rounded text-orange-300 cursor-not-allowed hover:text-orange-400 
      hover:bg-orange-100"
      >
        {children}
      </span>
    );
  }
}
