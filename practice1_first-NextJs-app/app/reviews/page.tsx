import Link from "next/link";
import Heading from "@/components/Heading";
import { Review, getReviews } from "@/lib/reviews";

export default async function ReviewsPage() {
  const reviews: Review[] = await getReviews();
  console.log(reviews);
  
  
  return (
    <>
      <Heading>Reviews</Heading>
      <div className="flex flex-col items-start mt-4 gap-y-4">
        <Link className="bg-white rounded shadow" href="/reviews/hollow-knight">
          <img
            className="rounded-t"
            width="420"
            height="180"
            src="/images/hollow-knight.jpg"
            alt=""
          />
          <p className="text-center py-1 font-orbitron font-bold">Hollow Knight</p>
        </Link>

        <Link className="bg-white rounded shadow" href="/reviews/fortnite">
          <img
            className="rounded-t"
            width="420"
            height="180"
            src="/images/stardew-valley.jpg"
            alt=""
          />
          <p className="text-center py-1 font-orbitron font-bold">Fortnite</p>
        </Link>
      </div>
    </>
  );
}
