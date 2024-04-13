"use client";

import { useState } from "react";

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
      className="border px-2 py-1 text-orange-600 hover:text-orange-700 hover:bg-orange-200"
      onClick={clickHandler}
    >
      {clicked ? "Link Copied!" : "Share Link"}
    </button>
  );
}
