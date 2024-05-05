import { db } from "./db";
import { hash, compare } from "bcrypt";

export async function createUser({
  email,
  name,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  const passwordHash = await hash(password, 10);
  return await db.user.create({
    data: {
      email,
      name,
      passwordHash,
    },
  });
}

export async function loginUser(email: string, password: string) {
  const user = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (user && (await compare(password, user.passwordHash))) {
    return user;
  }
}
