"use client";

import { searchBetweenReviews, type Review } from "@/lib/reviews";
import { Combobox } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface SearchBoxProps {
  reviews: Review[];
}

export default function SearchBox() {
  // { reviews }: SearchBoxProps
  const [query, setQuery] = useState("");
  const [searchedReviews, setSearchedReviews] = useState<Review[]>([]);
  const router = useRouter();

  // const filteredReviews = searchBetweenReviews(reviews, query);

  useEffect(() => {
    if (query.length > 1) {
      const controller = new AbortController();
      (async () => {
        const url = "/api/search?query=" + encodeURIComponent(query);

        const res = await fetch(url, { signal: controller.signal });
        const data = await res.json();
        setSearchedReviews(data);
      })();
      return () => controller.abort();
    } else {
      setSearchedReviews([]);
    }
  }, [query]);

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
          {searchedReviews.map((review) => (
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
