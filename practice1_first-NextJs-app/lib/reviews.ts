import matter from "gray-matter";
import { marked } from "marked";
import { readFile, readdir } from "node:fs/promises";
import { Interface } from "node:readline";

export interface Review {
  slug:string;
  title: string;
  date: string;
  image: string;
  body: string;
}

export async function getReview(slug: string): Promise<Review> {
  const text = await readFile(`./content/reviews/${slug}.md`, "utf-8");
  const {
    content,
    data: { title, image, date },
  } = matter(text);
  const body = await marked(content);

  const output: Review = {
    body,
    title,
    image,
    date,
    slug
  };

  return output;
}

export async function getReviews(): Promise<Review[]> {
  const files = await readdir("./content/reviews/");
  const slugs = files
    .filter((file) => file.endsWith(".md"))
    .map((slug) => slug.slice(0, -".md".length));
  console.log("[getReviews]", slugs);

  let reviews: Review[] = [];

  for (let slug of slugs) {    
    reviews.push(await getReview(slug));
  }

  return reviews;
}
