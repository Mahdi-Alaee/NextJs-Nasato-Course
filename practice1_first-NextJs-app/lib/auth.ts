import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { cache } from "react";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);
const COOKIE_NAME = "sessionToken";
const DURATION_DATE = 14 * 24 * 60 * 60 * 1000;

export type AuthenticatedUser = {
  id: string;
  email: string;
  name: string;
};

const decodeUserSession = cache(async (userToken: string) => {
  console.log("verify");

  return (await jwtVerify(userToken, JWT_SECRET))?.payload as AuthenticatedUser;
});

export function getUserFromSession() {
  const userToken = cookies().get(COOKIE_NAME)?.value;
  if (!userToken) {
    return null;
  }

  return decodeUserSession(userToken);
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
// const { payload } = (await jwtVerify(userToken, JWT_SECRET)) as {
//   payload: AuthenticatedUser;
// };
