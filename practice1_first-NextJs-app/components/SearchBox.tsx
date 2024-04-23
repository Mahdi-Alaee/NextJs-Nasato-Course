"use client";

import { searchBetweenReviews, type Review } from "@/lib/reviews";
import { Combobox } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SearchBoxProps {
  reviews: Review[];
}

export default function SearchBox({ reviews }: SearchBoxProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const filteredReviews = searchBetweenReviews(reviews, query);

  const handleChange = (selectedReview: Review) => {
    router.push(`/reviews/${selectedReview.slug}`);
  };

  return (
    <div className="relative">
      <Combobox onChange={handleChange}>
        <Combobox.Input
          className="p-2 outline-none"
          type="text"
          placeholder="Search ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Combobox.Options className="absolute bg-white w-full rounded max-h-40 overflow-y-scroll">
          {filteredReviews.map((review) => (
            <Combobox.Option
              className="w-full"
              key={review.slug}
              value={review}
            >
              {({ active }) => (
                <span
                  className={`block px-2 py-1 cursor-pointer truncate ${
                    active ? "bg-orange-100" : ""
                  }`}
                >
                  {review.title}
                </span>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
}
