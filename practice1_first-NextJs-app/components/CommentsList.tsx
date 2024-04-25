import { UserCircleIcon } from "@heroicons/react/24/outline";

const comments = [
  { id: 1, sender: "Alice", body: "This game is very nice!" },
  { id: 2, sender: "Bob", body: "Love this game!" },
  { id: 3, sender: "John", body: "can't stop playing!" },
];

export default function CommentsList() {
  return (
    <ul className="border border-gray-300">
      {comments.map((comment) => (
        <li className="odd:bg-orange-100 p-3 border-b border-gray-300 last:border-none" key={comment.id}>
          {/* comment top */}
          <div className="text-gray-500 flex gap-x-4">
            {/* icon */}
            <UserCircleIcon className="w-6" />
            {/* creator */}
            <span>{comment.sender}</span>
          </div>
          {/* body */}
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
}
