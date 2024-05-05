import { db } from "./db";

export async function createUser(data: {
  name: string;
  email: string;
  password: string;
}) {
  return await db.user.create({ data });
}

export async function loginUser(email: string, password: string) {
  return await db.user.findUnique({
    where: {
      email,
      password,
    },
  });
}
