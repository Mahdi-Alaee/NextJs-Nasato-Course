import { getCommentsByReview } from "@/lib/comments";
import { UserCircleIcon } from "@heroicons/react/24/outline";

interface CommentsListProps {
  slug: string;
}

export default async function CommentsList({ slug }: CommentsListProps) {
  const comments = await getCommentsByReview(slug);

  return (
    comments?.length > 0 ?
    <ul className="border border-gray-300">
      {comments.map((comment) => (
        <li
          className="odd:bg-orange-100 p-3 border-b border-gray-300 last:border-none"
          key={comment.id}
        >
          {/* comment top */}
          <div className="text-gray-500 flex gap-x-4">
            {/* icon */}
            <UserCircleIcon className="w-6" />
            {/* creator */}
            <span>{comment.user.name}</span>
          </div>
          {/* body */}
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>: <p className="text-yellow-600 bg-yellow-100 text-xl mt-2 p-2">No comments!</p>
  );
}
