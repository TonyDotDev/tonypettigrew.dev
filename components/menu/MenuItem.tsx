import Link from "next/link";
import { useRouter } from "next/router";

import Ping from "./Ping";
import { MenuItem as Props } from "./types";

export default function MenuItem({ name, href }: Props) {
  const { pathname } = useRouter();

  const isSelectedRoute = pathname === href;

  console.log(pathname, href, "TEST");

  return (
    <li
      className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
      style={{
        transitionDelay: "150ms",
      }}
    >
      <Link href={href}>
        <a className="flex items-center w-auto py-6">
          {isSelectedRoute && <Ping />}
          {name}
        </a>
      </Link>
    </li>
  );
}
