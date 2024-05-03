import Heading from "@/components/Heading";
import { getReviewsByPage } from "@/lib/reviews";
import ReviewBox from "@/components/ReviewBox";
import { Metadata } from "next";
import Pagination from "@/components/Pagination";
import SearchBox from "@/components/SearchBox";

interface ReviewsPageProps {
  searchParams: { page?: string };
}

export const metadata: Metadata = {
  title: "reviews",
};

export const revalidate = 400;

export default async function ReviewsPage({ searchParams }: ReviewsPageProps) {
  // console.log("[ReviewsPage]", "rendered");

  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { pageReviews, pagesCount } = await getReviewsByPage(4, page);

  // console.log("[ReviewsPage]", page);

  return (
    <>
      <Heading>Reviews</Heading>
      <div className="flex justify-between items-center pt-4 px-4">
        <Pagination page={page} pageRoute="/reviews" pagesCount={pagesCount} />
        <SearchBox
        // reviews={allReviews}
        />
      </div>
      <div
        className="flex flex-col items-center justify-center mt-4 gap-y-4 
      sm:flex-row sm:gap-x-6 sm:flex-wrap"
      >
        {pageReviews.map((review, index) => (
          <ReviewBox priority={index === 0} key={review.slug} {...review} />
        ))}
      </div>
    </>
  );
}
