import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);
const COOKIE_NAME = "sessionToken";
const DURATION_DATE = 14 * 24 * 60 * 60 * 1000;

export type AuthenticatedUser = {
  id: string;
  email: string;
  name: string;
};

export async function getUserFromSession() {
  const userToken = cookies().get(COOKIE_NAME)?.value;
  if (!userToken) {
    return null;
  }

  const { payload } = (await jwtVerify(userToken, JWT_SECRET)) as {
    payload: AuthenticatedUser;
  };

  return payload;
}

export async function setUserSession({ name, email, id }: AuthenticatedUser) {
  const expireDate = new Date(Date.now() + DURATION_DATE);

  const token = await new SignJWT({ name, email, id })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(expireDate)
    .sign(JWT_SECRET);

  cookies().set(COOKIE_NAME, token, { expires: expireDate });
}

export function logout() {
  cookies().delete(COOKIE_NAME);
}
