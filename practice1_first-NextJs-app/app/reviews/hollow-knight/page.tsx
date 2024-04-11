import Heading from "@/components/Heading";
import { getReview } from "@/lib/reviews";

export default async function HollowKnightReviewPage() {
  const { title, image, date, body } = await getReview('hollow-knight');

  return (
    <>
      <Heading>{title}</Heading>
      {/* date */}
      <p className="italic mt-2 -mb-2">{date}</p>
      <img
        className="my-4 rounded"
        src={image}
        width="600"
        height="300"
        alt="game image"
      />
      <article
        dangerouslySetInnerHTML={{ __html: body }}
        className="prose prose-slate prose-h1:text-3xl"
      />
    </>
  );
}
