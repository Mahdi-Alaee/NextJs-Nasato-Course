import Link from "next/link";
import Heading from "@/components/Heading";

export default function ReviewsPage() {
  return (
    <>
      <Heading>Reviews</Heading>
      <ul>
          <li>
            <Link href='/reviews/hollow-knight'>Hollow Knight</Link>
          </li>
          <li>
            <Link href='/reviews/fortnite'>Fortnite</Link>
          </li>
        </ul>
    </>
  );
}
