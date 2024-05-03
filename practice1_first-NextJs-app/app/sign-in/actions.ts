"use server";

import { setUserSession } from "@/lib/auth";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const JWT_SECRET = new TextEncoder().encode("random_string");

export async function signInAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const user = authenticate(email, password);
  if (!user) {
    return { isError: true, message: "incorrect data is entered !!!" };
  }
  setUserSession(user);
  redirect("/");
}

function authenticate(email: string, password: string) {
  if (email.endsWith("@example.com") && password === "test") {
    return { email };
  }
}
