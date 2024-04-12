import Heading from "@/components/Heading";
import { getReview } from "@/lib/reviews";

interface ReviewPageProps {
  params: { slug: string };
}

export default async function ReviewPage({
  params: { slug },
}: ReviewPageProps) {
  let reviewData;

  try {
    reviewData = await getReview(slug);
  } catch (err) {
    console.log(err);
  }

  return (
    <>
      {reviewData ? (
        <>
          <Heading>{reviewData.title}</Heading>
          {/* date */}
          <p className="italic mt-2 -mb-2">{reviewData.date}</p>
          <img
            className="my-4 rounded"
            src={reviewData.image}
            width="600"
            height="300"
            alt="game image"
          />
          <article
            dangerouslySetInnerHTML={{ __html: reviewData.body }}
            className="prose prose-slate prose-h1:text-3xl"
          />
        </>
      ) : (
        <h1 className="bg-red-200 text-red-600 flex justify-center items-center text-5xl h-full">
          not found
        </h1>
      )}
    </>
  );
}
