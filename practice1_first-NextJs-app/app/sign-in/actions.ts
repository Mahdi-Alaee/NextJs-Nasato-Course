"use server";

import { redirect } from "next/navigation";

export async function signInAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const user = athenticate(email, password);
  if (!user) {
    return { isError: true, message: "incorrect data is entered !!!" };
  }
  redirect('/');
}

function athenticate(email: string, password: string) {
  if (email.endsWith("@example.com") && password === "test") {
    return { email, password };
  }
}
