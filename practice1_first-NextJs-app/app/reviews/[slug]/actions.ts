"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createCommentAction(formData: FormData) {
  const slug = formData.get("slug") as string;
  const user = formData.get("user") as string;
  const body = formData.get("message") as string;

  if (!user.length) {
    return { error: true, message: "the user field is invalid" };
  }

  const data = {
    slug,
    user,
    body,
  };

  const res = await db.comment.create({
    data,
  });
  console.log(res);
  revalidatePath(`/reviews/${data.slug}`);
  redirect(`/reviews/${data.slug}`);
}
