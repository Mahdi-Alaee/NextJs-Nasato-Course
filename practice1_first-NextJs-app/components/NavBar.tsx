import Link from "next/link";
import NavLink from "./NavLink";

export default function NavBar() {
  return (
    <ul className="flex gap-x-3">
      <li>
        <NavLink className="text-orange-800 font-orbitron font-bold" href="/">
          Indie Gamer
        </NavLink>
      </li>
      <li className="ml-auto">
        <NavLink
          className="text-orange-800 font-bold hover:underline"
          href="/about"
          prefetch={false}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-orange-800 font-bold hover:underline"
          href="/reviews"
        >
          Reviews
        </NavLink>
      </li>
    </ul>
  );
}
