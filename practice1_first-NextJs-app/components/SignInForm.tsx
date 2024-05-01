"use client";

import { createCommentAction } from "@/app/reviews/[slug]/actions";
import { signInAction } from "@/app/sign-in/actions";
import { useActionState } from "@/hooks";

export default function SignInForm() {
  const [state, handleSubmit] = useActionState(signInAction);

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md mt-4 mx-auto max-w-xl">
      {/* text */}
      <h2 className="font-bold text-3xl mb-10 text-center text-orange-600">
        Sign-In please!
      </h2>
      {/* form wrapper */}
      <div className="flex flex-col gap-y-3 mt-4">
        {/* input wrapper */}
        <div className="flex justify-between">
          {/* input label */}
          <label>Email:</label>
          {/* input */}
          <input
            className="border border-gray-200 outline-none p-2 md:w-96"
            type="email"
            name="email"
          />
        </div>
        {/* input wrapper */}
        <div className="flex justify-between">
          {/* input label */}
          <label>Password:</label>
          {/* input */}
          <input
            type="password"
            name="password"
            className="border border-gray-200 outline-none p-2 md:w-96"
          />
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
      {/* <input type="hidden" name="slug" /> */}
      {/* finish hidden inputs */}
    </form>
  );
}
