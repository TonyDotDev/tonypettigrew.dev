import Link from "next/link";

import CategoryBadge from "./CategoryBadge";
import { Category } from "types";

export type HandleCategoryBadgeClick = (slug: string) => void;

interface Props {
  title: string;
  slug: string;
  description: string;
  categories: Category[];
  handleClick?: HandleCategoryBadgeClick;
}

export default function CodeSnippet({
  title,
  slug,
  description,
  categories,
  handleClick,
}: Props) {
  return (
    <div className="w-full border rounded p-4">
      <div className="w-full ">
        <Link
          href={`/snippets/${slug}`}
          className="flex flex-col justify-between md:flex-row"
        >
          <a>
            <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
              {title}
            </h4>
          </a>
        </Link>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
        <div className="flex w-full items-center mt-4">
          {categories.map((category) => (
            <CategoryBadge
              key={category._id}
              label={category.label}
              slug={category.slug}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
