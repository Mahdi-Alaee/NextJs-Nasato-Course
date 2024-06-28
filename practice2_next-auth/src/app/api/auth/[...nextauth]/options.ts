import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          placeholder: "Enter your email ...",
          type: "email",
        },
        password: {
          label: "Password",
          placeholder: "Enter your password ...",
          type: "password",
        },
      },
      authorize: (credentials, _req) => {
        const user = {
          id: "1",
          email: "mahdi@gmail.com",
          password: "mahdi1385",
        };
        if (
          credentials?.email === user.email &&
          credentials.password === user.password
        ) {
          return user;
        }
        return null;
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
  },
};
