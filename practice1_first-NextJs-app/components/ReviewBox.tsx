import { Review } from "@/lib/reviews";
import Image from "next/image";
import Link from "next/link";

export default function ReviewBox({ slug, image, title }: Review) {
  return (
    <Link className="bg-white rounded shadow" href={`/reviews/${slug}`}>
      <Image className="rounded-t mx-auto" width="420" height="180" src={image} alt="" />
      <p className="text-center py-1 font-orbitron font-bold">{title}</p>
    </Link>
  );
}
