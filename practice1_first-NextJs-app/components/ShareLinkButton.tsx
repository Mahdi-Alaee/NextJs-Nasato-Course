"use client";

import { useState } from "react";
import { LinkIcon } from "@heroicons/react/20/solid";

export default function ShareLinkButton() {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(true);
    navigator.clipboard.writeText(location.href);
    setTimeout(() => {
      setClicked(false);
    }, 1500);
  };

  return (
    <button
      className="border px-2 py-1 text-orange-600 hover:text-orange-700 
      flex gap-x-2 items-center hover:bg-orange-200"
      onClick={clickHandler}
    >
      {clicked ? (
        "Link Copied!"
      ) : (
        <>
          <LinkIcon className="w-5 h-5" />
          Share Link
        </>
      )}
    </button>
  );
}
