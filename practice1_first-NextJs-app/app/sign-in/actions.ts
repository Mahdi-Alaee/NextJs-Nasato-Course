"use server";

import { setUserSession } from "@/lib/auth";
import { loginUser } from "@/lib/user";
import { redirect } from "next/navigation";

export async function signInAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const user = await loginUser(email, password);
  if (!user) {
    return { isError: true, message: "incorrect data is entered !!!" };
  }
  setUserSession(user);
  redirect("/");
}
