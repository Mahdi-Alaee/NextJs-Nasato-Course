import matter from "gray-matter";
import { marked } from "marked";
import { readFile, readdir } from "node:fs/promises";
import { Interface } from "node:readline";

export interface Review {
  slug: string;
  title: string;
  date: string;
  image: string;
  body: string;
}

export async function getReview(slug: string): Promise<Review | undefined> {
  try {
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
      slug,
    };

    return output;
  } catch (err) {
    console.log(err);
  }
}

export async function getReviews(): Promise<Review[]> {
  const slugs = await getSlugs();

  let reviews: Review[] = [];

  for (let slug of slugs) {
    const review = await getReview(slug);
    if (review) reviews.push(review);
  }
  reviews.sort((a, b) => b.date.localeCompare(a.date));

  return reviews;
}

export async function getSlugs() {
  const slugs = (await readdir("./content/reviews/"))
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));

  return slugs;
}

export async function getLatestReview() {
  const reviews = await getReviews();
  return reviews[0];
}

export async function getReviewsByPage(
  contentCountPerPage: number,
  page: number
) {
  const reviews = await getReviews();
  const endIndex = contentCountPerPage * page;
  const startIndex = endIndex - contentCountPerPage;
  const pagesCount = Math.ceil(reviews.length / contentCountPerPage);
  const outputReviews = reviews.slice(startIndex, endIndex);

  return { pagesCount, reviews: outputReviews };
}
