import Link from "next/link";
import Heading from "@/components/Heading";
import { Review, getReviews } from "@/lib/reviews";
import ReviewBox from "@/components/ReviewBox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "reviews",
};

export default async function ReviewsPage() {
  const reviews: Review[] = await getReviews();

  return (
    <>
      <Heading>Reviews</Heading>
      <div
        className="flex flex-col items-center justify-center mt-4 gap-y-4 
      sm:flex-row sm:gap-x-6 sm:flex-wrap"
      >
        {reviews.map((review, index) => (
          <ReviewBox priority={index === 0} key={review.slug} {...review} />
        ))}
      </div>
    </>
  );
}
