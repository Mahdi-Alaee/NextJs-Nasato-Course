import Heading from "@/components/Heading";
import SignUpForm from "@/components/SignUpForm";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <>
      <Heading>Sign Up</Heading>
      <SignUpForm />
      <div className="max-w-xl mx-auto flex gap-x-2">
        <p>You already have an account?</p>
        <Link className="text-orange-500" href="/sign-in">
          Sign In
        </Link>
      </div>
    </>
  );
}
