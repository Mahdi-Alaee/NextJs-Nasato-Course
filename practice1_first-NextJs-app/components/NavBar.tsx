import Link from "next/link";

export default function NavBar() {
  return (
    <ul className="flex gap-x-3">
      <li>
        <Link className="text-orange-800 font-orbitron font-bold" href="/">
          Indie Gamer
        </Link>
      </li>
      <li className="ml-auto">
        <Link
          className="text-orange-800 font-bold hover:underline"
          href="/about"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className="text-orange-800 font-bold hover:underline"
          href="/reviews"
        >
          Reviews
        </Link>
      </li>
    </ul>
  );
}
