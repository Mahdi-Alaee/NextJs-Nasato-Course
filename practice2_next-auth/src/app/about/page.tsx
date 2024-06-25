"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push(`/auth/login?callbackUrl=/about`);
    },
  });

  console.log(session?.user);

  return <h1 className="text-4xl">About Page! && {session?.user?.email}</h1>;
}
