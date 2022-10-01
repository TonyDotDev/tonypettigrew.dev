import Link from "next/link";

import { MenuItem as Props } from "./types";

export default function MenuItem({ name, href }: Props) {
  return (
    <li
      className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
      style={{
        transitionDelay: "150ms",
      }}
    >
      <Link href={href}>
        <a className="flex w-auto py-6">{name}</a>
      </Link>
    </li>
  );
}
