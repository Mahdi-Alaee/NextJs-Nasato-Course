"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createCommentAction(formData: FormData) {
  if (!formData.get("user")) {
    return { error: true, message: "the user field is invalid" };
  }

  const data = {
    slug: formData.get("slug") as string,
    user: formData.get("user") as string,
    body: formData.get("message") as string,
  };

  const res = await db.comment.create({
    data,
  });
  console.log(res);
  revalidatePath(`/reviews/${data.slug}`);
  redirect(`/reviews/${data.slug}`);
}
