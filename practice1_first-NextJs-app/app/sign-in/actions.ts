"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export interface AuthenticatedUser {
  email: string;
}

export async function signInAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const user = authenticate(email, password);
  if (!user) {
    return { isError: true, message: "incorrect data is entered !!!" };
  }
  cookies().set("user", JSON.stringify(user));
  redirect("/");
}

function authenticate(email: string, password: string) {
  if (email.endsWith("@example.com") && password === "test") {
    return { email };
  }
}
