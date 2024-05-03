import NavLink from "./NavLink";
import { getUserFromSession } from "@/lib/auth";

const JWT_SECRET = new TextEncoder().encode("random_string");

export default async function NavBar() {
  const authenticatedUser = await getUserFromSession();

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
      {!authenticatedUser ? (
        <li>
          <NavLink
            className="text-orange-800 font-bold hover:underline"
            href="/sign-in"
          >
            Sign In
          </NavLink>
        </li>
      ) : (
        <li>
          <NavLink
            className="text-orange-800 font-bold hover:underline"
            href="/"
          >
            {authenticatedUser.email}
          </NavLink>
        </li>
      )}
    </ul>
  );
}
