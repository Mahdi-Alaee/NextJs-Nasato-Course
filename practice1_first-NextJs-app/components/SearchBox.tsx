"use client";

import type { Review } from "@/lib/reviews";
import { Combobox } from "@headlessui/react";

interface SearchBoxProps {
  reviews: Review[];
}

export default function SearchBox({ reviews }: SearchBoxProps) {
  return (
    <div className='relative'>
      <Combobox>
        <Combobox.Input
          className="p-2 outline-none"
          type="text"
          placeholder="Search ..."
        />
        <Combobox.Options className='absolute bg-white w-full rounded'>
          {reviews.map((review) => (
            <Combobox.Option className='w-full' key={review.slug} value={review.title}>
              {({ active }) => (
                <span className={`block px-2 py-1 cursor-pointer truncate ${active ? "bg-orange-100" : ""}`}>
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
