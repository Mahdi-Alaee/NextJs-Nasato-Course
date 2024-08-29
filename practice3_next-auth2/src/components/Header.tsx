import Link from "next/link";

export default function Header() {
    return (
        <header className="p-4 bg-red-300 flex justify-center items-start gap-x-4">
            <Link className="hover:text-red-500" href='/login'>Login</Link>
            <Link className="hover:text-red-500" href='/register'>Register</Link>
        </header>
    )
}