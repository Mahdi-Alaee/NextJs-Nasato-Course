"use server";

import { setUserSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { createUser } from "@/lib/user";
import { redirect } from "next/navigation";

interface User {
  email: string;
  name: string;
  password: string;
}

export async function createUserAction(formData: FormData) {
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const password = formData.get("password") as string;

  const data = {
    email,
    name,
    password,
  };

  const error = await validate(data);

  console.log(error);

  if (error !== false) {
    return { isError: true, message: error };
  }

  const user = await createUser(data);
  setUserSession(user);
  redirect("/");
}

async function validate({ email, name, password }: User) {
  const isEmailExist = await db.user.findUnique({
    where: {
      email,
    },
  });
  if (!isValidEmail(email)) {
    return "email is not valid";
  } else if (Boolean(isEmailExist)) {
    return "your email is already exists in our database";
  } else if (!(name.length > 3 && name.length < 40 && !Number(name[0]))) {
    return "username must be greater than 3 and lower than 40 caracters and it must have at least 1 alphabet";
  } else if (!isValidPassword(password)) {
    return `
    password must meets the following criteria
    - At least 8 characters long
    - Contains at least one uppercase letter
    - Contains at least one lowercase letter
    - Contains at least one digit
    `;
  } else {
    return false;
  }
}

function isValidEmail(email: string) {
  // Regular expression for validating email addresses
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regular expression
  return emailRegex.test(email);
}

function isValidPassword(password: string) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  // Test the password against the regular expression
  return passwordRegex.test(password);
}
