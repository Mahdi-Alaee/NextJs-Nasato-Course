'use client'

import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Logout(){
    return (
        <div className="text-center">
            <h1>Are you sure?</h1>
            <button className="mr-4" onClick={() => signOut({callbackUrl: '/'})}>
                Yes!
            </button>
            <Link href='/'>
                No!
            </Link>
        </div>
    )
}