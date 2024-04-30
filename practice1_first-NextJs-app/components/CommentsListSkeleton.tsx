import { getCommentsByReview } from "@/lib/comments";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function CommentsListSkeleton() {
  return (
    <ul className="border border-gray-300 animate-pulse">
      {[1, 2, 3].map((index) => (
        <li
          className="odd:bg-orange-100 p-3 border-b border-gray-300 last:border-none"
          key={index}
        >
          {/* comment top */}
          <div className="text-gray-500 flex gap-x-4 items-center">
            {/* icon */}
            <UserCircleIcon className="w-6 text-gray-400" />
            {/* creator */}
            <span>
              <div className="bg-gray-300 h-3 w-24 rounded-full"></div>
            </span>
          </div>
          {/* body */}
          <div className="bg-gray-300 h-3 w-3/4 rounded-full mt-4"></div>
        </li>
      ))}
    </ul>
  );
}
