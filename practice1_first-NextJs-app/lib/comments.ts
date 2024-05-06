import { db } from "./db";

export async function createComment(data: {
  userId: string;
  body: string;
  slug: string;
}) {
  return await db.comment.create({ data });
}

export async function getCommentsByReview(slug: string) {
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 6000));
  const comments = await db.comment.findMany({
    where: { slug },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: { select: { name: true } },
    },
  });

  return comments;
}
