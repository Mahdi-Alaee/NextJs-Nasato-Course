import Link from "next/link";
import NavLink from "./NavLink";
import { cookies } from "next/headers";
import { AuthenticatedUser } from "@/app/sign-in/actions";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode("random_string");

export default async function NavBar() {
  const getUserFromSession = async () => {
    const userToken = cookies().get("sessionToken");
    if (!userToken) {
      return null;
    }

    const { payload } = await jwtVerify(userToken.value, JWT_SECRET);
    return payload;
  };

  const authenticatedUser =
    (await getUserFromSession()) as AuthenticatedUser | null;

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
