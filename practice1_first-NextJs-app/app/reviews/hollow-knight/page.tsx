import { readFile } from "node:fs/promises";
import Heading from "@/components/Heading";
import { marked } from "marked";

export default async function HollowKnightReviewPage() {
  const text = await readFile("./content/reviews/hollow-knight.md", 'utf-8');
  const html = marked(text)

  return (
    <>
      <Heading>this is Hollow-Knight review page</Heading>
      <img
        className="my-4 rounded"
        src="/images/hollow-knight.jpg"
        width="600"
        height="300"
        alt="game image"
      />
      <article dangerouslySetInnerHTML={{__html: html}} />
    </>
  );
}
