import { db } from "./db";

export async function createUser(data: {
  name: string;
  email: string;
  password: string;
}) {
  return await db.user.create({ data });
}
