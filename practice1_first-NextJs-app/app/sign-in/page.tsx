import Heading from "@/components/Heading";
import SignInForm from "@/components/SignInForm";
import Link from "next/link";

export default function SignIn() {
  return (
    <>
      <Heading>Sign-In</Heading>
      <SignInForm />
      <div className="max-w-xl mx-auto flex gap-x-2">
        <p>You don`t have account?</p>
        <Link className="text-orange-500" href="/sign-up">
          Sign Up
        </Link>
      </div>
    </>
  );
}
