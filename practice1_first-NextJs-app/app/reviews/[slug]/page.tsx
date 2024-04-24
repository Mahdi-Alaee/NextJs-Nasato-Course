import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getReview, getSlugs } from "@/lib/reviews";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ReviewPageParams {
  slug: string;
}

interface ReviewPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params: { slug },
}: ReviewPageProps): Promise<Metadata | null> {
  const review = await getReview(slug);

  if (!review) {
    return null;
  }

  return {
    title: review.title,
  };
}

export async function generateStaticParams(): Promise<ReviewPageParams[]> {
  const slugs = await getSlugs();

  return slugs.map((slug) => ({ slug }));
}

export default async function ReviewPage({
  params: { slug },
}: ReviewPageProps) {
  const reviewData = await getReview(slug);

  if (!reviewData) notFound();

  console.log("[ReviewPage]", slug + " rendered");

  return (
    <>
      <Heading>{reviewData.title}</Heading>
      {/* image top container */}
      <div className="flex gap-x-4 items-center mt-2 -mb-2">
        {/* date */}
        <p className="italic">{reviewData.date}</p>
        {/* share link */}
        <ShareLinkButton />
      </div>
      <Image
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
  );
}
