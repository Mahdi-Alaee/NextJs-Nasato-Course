import Heading from "@/components/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'about'
}

export default function AboutPage() {
  return (
    <>
      <Heading>this is about page</Heading>
      <p>NextJs is a react-based framework for better web developing</p>
    </>
  );
}
