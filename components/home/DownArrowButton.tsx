import React from "react";
import Link from "next/link";

import { DownArrow } from "components/svg/DownArrow";

export const DownArrowButton = () => {
  return (
    <Link href="#featured-repositories">
      <a
        aria-label="scroll-down"
        className="rounded-full border border-pink-500 p-4 relative hover:bg-pink-500 hover:text-white dark:hover:text-black"
      >
        <div className="absolute animate-ping rounded-full border border-pink-500 top-0 left-0 right-0 bottom-0 width-full height-full" />
        <DownArrow className="relative animate-bounce top-[4px]" />
      </a>
    </Link>
  );
};
