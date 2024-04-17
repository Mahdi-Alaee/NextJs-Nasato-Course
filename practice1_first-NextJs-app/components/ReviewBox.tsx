import { Review } from "@/lib/reviews";
import Image from "next/image";
import Link from "next/link";

interface ReviewBoxProps extends Review {
  priority: boolean
}

export default function ReviewBox({ slug, image, title, priority }: ReviewBoxProps) {
  return (
    <Link className="bg-white rounded shadow" href={`/reviews/${slug}`}>
      <Image className="rounded-t mx-auto w-auto h-auto max-w-md" priority={priority} width="420" 
      height="180" src={image} alt="" />
      <p className="text-center py-1 font-orbitron font-bold">{title}</p>
    </Link>
  );
}
