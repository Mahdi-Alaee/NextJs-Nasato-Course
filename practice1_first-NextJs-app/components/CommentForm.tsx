"use client";

import { createCommentAction } from "@/app/reviews/[slug]/actions";
import { useActionState } from "@/hooks";

interface CommentFormProps {
  slug: string;
  title: string;
}

export default function CommentForm({ slug, title }: CommentFormProps) {
  const [state, handleSubmit] = useActionState(createCommentAction);

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md mt-4">
      {/* question */}
      <p>
        Already played <span className="font-bold">{title}</span>?
      </p>
      {/* command */}
      <p>Have to say!</p>
      {/* form wrapper */}
      <div className="flex flex-col gap-y-3 mt-4">
        {/* input wrapper */}
        <div className="flex justify-between">
          {/* input label */}
          <label>Your name:</label>
          {/* input */}
          <input
            className="border border-gray-200 outline-none p-2 md:w-96"
            type="text"
            name="user"
            // minLength={5}
            // maxLength={50}
            // required
          />
        </div>
        {/* input wrapper */}
        <div className="flex justify-between">
          {/* input label */}
          <label>Your comment:</label>
          {/* input */}
          <textarea
            name="message"
            className="border border-gray-200 outline-none p-2 min-h-28 max-h-96 md:w-96"
            // minLength={10}
            // maxLength={500}
            // required
          ></textarea>
        </div>
        {Boolean(state.error?.isError) && (
          <p className="text-red-700 text-center pl-6">
            {state.error?.message}
          </p>
        )}
        <button
          className="bg-orange-800 text-white mx-auto px-12 py-2 rounded-lg disabled:bg-gray-600 disabled:cursor-not-allowed"
          type="submit"
          disabled={state.isLoading}
        >
          {state.isLoading ? "loading ..." : "Submit"}
        </button>
      </div>
      {/* start hidden inputs */}
      <input type="hidden" name="slug" value={slug} />
      {/* finish hidden inputs */}
    </form>
  );
}
