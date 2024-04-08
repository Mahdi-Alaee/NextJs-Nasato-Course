import Link from "next/link";

export default function NavBar() {
  return (
    <ul className="flex gap-x-3">
      <li>
        <Link className="text-orange-800 hover:underline" href="/">Home</Link>
      </li>
      <li>
        <Link className="text-orange-800 hover:underline" href="/about">About</Link>
      </li>
      <li>
        <Link className="text-orange-800 hover:underline" href="/reviews">Reviews</Link>
      </li>
    </ul>
  );
}
