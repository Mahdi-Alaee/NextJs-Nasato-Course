import { readFile } from "node:fs/promises";
import Heading from "@/components/Heading";
import { marked } from "marked";
import matter from "gray-matter";

export default async function HollowKnightReviewPage() {
  const text = await readFile("./content/reviews/hollow-knight.md", "utf-8");
  const {
    content,
    data: { title, image, date },
  } = matter(text);
  const html = marked(content);

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
        dangerouslySetInnerHTML={{ __html: html }}
        className="prose prose-slate prose-h1:text-3xl"
      />
    </>
  );
}
