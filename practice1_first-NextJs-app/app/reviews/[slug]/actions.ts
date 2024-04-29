"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createCommentAction(formData: FormData) {
  const slug = formData.get("slug") as string;
  const user = formData.get("user") as string;
  const body = formData.get("message") as string;

  const data = {
    slug,
    user,
    body,
  };

  const error = validate(data);

  if (error !== false) {
    return { isError: true, message: error };
  }

  

  const res = await db.comment.create({
    data,
  });
  console.log(res);
  revalidatePath(`/reviews/${data.slug}`);
  redirect(`/reviews/${data.slug}`);
}

interface Data {
  slug: string;
  user: string;
  body: string;
}

function validate(data: Data) {
  if (data.user.length < 5) {
    return "the user field must have at least 5 letter!";
  } 
   else if (data.user.length > 50) {
    return "the user field is too long!";
  } 
   else if (data.body.length < 10) {
    return "the message field must have at least 10 letter!";
  } 
   else if (data.body.length < 10) {
    return "the message field is too long!";
  } 
  else {
    return false;
  }
}
