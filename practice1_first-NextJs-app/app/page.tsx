import Heading from "@/components/Heading";
import ReviewBox from "@/components/ReviewBox";
import { getLatestReview } from "@/lib/reviews";
import { Metadata } from "next";

export const metadata: Metadata = {
  description: "game reviews by Indie Gamer",
};

export const revalidate = 400;

export default async function HomePage() {
  const latestReview = await getLatestReview();

  // console.log('[HomePage]', 'rendered');
  

  return (
    <>
      <Heading>this is my first next page</Heading>
      <div className="my-4 flex">
        <ReviewBox {...latestReview} priority />
      </div>
      <p className="">
        NextJs is a react-based framework for better web developing
      </p>
    </>
  );
}
