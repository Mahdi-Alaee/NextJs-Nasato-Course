import { db } from "./db";

export async function createComment(user: string, body: string, slug: string) {
  return await db.comment.create({
    data: {
      user,
      body,
      slug,
    },
  });
}

export async function getCommentsByReview(slug: string) {
  const comments = await db.comment.findMany({
    where: { slug },
  });

  return comments;
}
