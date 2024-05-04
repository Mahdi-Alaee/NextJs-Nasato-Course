import { logout } from "@/lib/auth";
import { redirect } from "next/navigation";

export default function SignOutButton() {
  const action = async (_formData: FormData) => {
    'use server';

    logout()
  };

  return (
    <form action={action}>
      <button className="text-orange-800 font-orbitron font-bold">Sign Out</button>
    </form>
  );
}
