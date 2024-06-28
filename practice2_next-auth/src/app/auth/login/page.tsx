"use client";

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      const res = await signIn("credentials", {
        redirect: false,
        callbackUrl,
        email,
        password,
      });

      console.log({ res });
      if (res?.ok) {
        console.log(callbackUrl);
        router.push(callbackUrl);
      } else setError("your entered credentials is not valid!");
    } catch (err) {
      setError("your entered credentials is not valid!");
      console.log(err);
    }
  };

  return (
    <form
      className="flex flex-col gap-y-4 max-w-md mx-auto mt-40"
      onSubmit={submitHandler}
    >
      <span className="text-red-500">{error}</span>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Email"
        className="text-black"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Password"
        className="text-black"
      />
      <button className="bg-white text-black" type="submit">
        Login
      </button>
      <p>-----------------------------</p>
      <button
        onClick={() =>
          signIn("github", {
            callbackUrl,
          })
        }
      >
        GitHub
      </button>
    </form>
  );
}
