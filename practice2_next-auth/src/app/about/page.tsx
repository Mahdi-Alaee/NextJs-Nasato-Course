// 'use client'

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/options";

export default async function Login() {
  //! client component way
  // const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/auth/login?callbackUrl=/about");
  //   },
  // });

  //! server component way
  const session = await getServerSession(options);
  console.log(session);

  if (!session) {
    redirect("/auth/login?callbackUrl=/about");
  }
  return <h1 className="text-4xl">About Page! && {session?.user?.email}</h1>;
}
