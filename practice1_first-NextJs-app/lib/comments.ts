import { db } from "./db";

export async function getCommentsByReview(slug: string) {
  const comments = await db.comment.findMany({
    where: { slug },
  });

  return comments;
}
