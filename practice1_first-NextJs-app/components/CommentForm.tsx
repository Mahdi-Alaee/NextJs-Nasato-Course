export default function CommentForm() {
  return (
    <form className="bg-white p-4 rounded-md mt-4">
      {/* question */}
      <p>
        Already played{" "}
        <span className="font-bold">Fall Guys Ultimate Knockout?</span>
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
          />
        </div>
        {/* input wrapper */}
        <div className="flex justify-between">
          {/* input label */}
          <label>Your comment:</label>
          {/* input */}
          <textarea className="border border-gray-200 outline-none p-2 min-h-28 max-h-96 md:w-96"></textarea>
        </div>
      <button className="bg-orange-800 text-white mx-auto px-12 py-2 rounded-lg" type="submit">Submit</button>
      </div>
    </form>
  );
}
