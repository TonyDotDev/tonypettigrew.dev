import { useState, Suspense } from "react";
import type { InferGetStaticPropsType } from "next";

import { CodeSnippet, HandleCategoryBadgeClick } from "components/snippet";
import SearchInput from "components/SearchInput";
import { allCategoriesQuery, allSnippetsQuery } from "lib/queries";
import { getClient } from "lib/sanity-server";
import useInput from "hooks/useInput";
import PageLayout from "layouts/page";
import type { Snippet, Category, CustomMeta } from "types";

export default function Snippets({
  snippets,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { bind: searchBind, value: searchValue } = useInput();
  const [categoryValue, setCategoryValue] = useState<string>("");
  const filteredSnippets = snippets.filter(
    (snippet: Snippet) =>
      snippet.title.toLowerCase().includes(searchValue.toLowerCase()) &&
      snippet.categories.some((category) =>
        category.slug.toLowerCase().includes(categoryValue.toLowerCase())
      )
  );

  const onCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryValue(e.target.value);
  };

  const handleCategoryBadgeClick: HandleCategoryBadgeClick = (slug) => {
    setCategoryValue(slug);
  };

  const categoryLabel: string | undefined = categories.find(
    (category) => category.slug === categoryValue
  )?.label;

  const customMeta: CustomMeta = {
    title: "Code Snippets – Tony Pettigrew",
    description:
      "A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks.",
  };
  return (
    <PageLayout
      customMeta={customMeta}
      title="Code Snippets"
      description="A colection of useful snippets that I have saved for ease of use. They
    range from CSS/styling to library snippets and hooks. Please feel free
    to use these in your code! You can filter by category or use the
    search to filter by keyword."
    >
      <div className="relative w-full mb-4 flex space-x-1">
        <SearchInput
          ariaLabel="Search Snippets"
          placeholder="Search snippets"
          fullWidth
          {...searchBind}
        />
        <select
          onChange={onCategoryChange}
          value={categoryValue}
          className="block px-4 w-2/5 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
        >
          <option value="">All</option>
          {categories?.map((category) => (
            <option value={category.slug} key={category._id}>
              {category.label}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full">
        <Suspense fallback={null}>
          <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
            {categoryLabel || "All"} Snippets
          </h3>
          <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
            {!filteredSnippets.length && (
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                No snippets found.
              </p>
            )}
            {filteredSnippets.map((snippet: Snippet) => (
              <CodeSnippet
                key={snippet._id}
                slug={snippet.slug}
                title={snippet.title}
                description={snippet.description}
                categories={snippet.categories}
                handleClick={handleCategoryBadgeClick}
              />
            ))}
          </div>
        </Suspense>
      </div>
    </PageLayout>
  );
}

export async function getStaticProps({ preview = false }) {
  const snippets: Snippet[] = await getClient(preview).fetch(allSnippetsQuery);
  const categories: Category[] = await getClient(preview).fetch(
    allCategoriesQuery
  );

  return { props: { snippets, categories } };
}
