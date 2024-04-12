import Link from "next/link";
import Heading from "@/components/Heading";
import { Review, getReviews } from "@/lib/reviews";

export default async function ReviewsPage() {
  const reviews: Review[] = await getReviews();

  return (
    <>
      <Heading>Reviews</Heading>
      <div className="flex flex-col items-center justify-center mt-4 gap-y-4 
      sm:flex-row sm:gap-x-6 sm:flex-wrap">
        {reviews.map((review) => (
          <Link
            className="bg-white rounded shadow"
            href={`/reviews/${review.slug}`}
          >
            <img
              className="rounded-t"
              width="420"
              height="180"
              src={review.image}
              alt=""
            />
            <p className="text-center py-1 font-orbitron font-bold">
              {review.title}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}
