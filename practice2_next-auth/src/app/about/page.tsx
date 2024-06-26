"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Login() {
  //! client component way
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/auth/login?callbackUrl=/about");
    },
  });

  console.log(session?.user);

  return <h1 className="text-4xl">About Page! && {session?.user?.email}</h1>;
}
