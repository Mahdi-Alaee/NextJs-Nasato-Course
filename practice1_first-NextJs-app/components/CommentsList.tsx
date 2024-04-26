import { getCommentsByReview } from "@/lib/comments";
import { UserCircleIcon } from "@heroicons/react/24/outline";

interface CommentsListProps {
  slug: string;
}

export default async function CommentsList({ slug }: CommentsListProps) {
  const comments = await getCommentsByReview(slug);

  return (
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
            <span>{comment.user}</span>
          </div>
          {/* body */}
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
}
