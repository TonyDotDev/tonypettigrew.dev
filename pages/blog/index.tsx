import { Suspense } from "react";
import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { BlogPost } from "components/blog";
import SearchInput from "components/SearchInput";
import PageLayout from "layouts/page";
import { postsQuery } from "lib/queries";
import { getClient } from "lib/sanity-server";
import useInput from "hooks/useInput";
import type { Post, CustomMeta } from "types";

export default function Blog({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { bind: searchBind, value: searchValue } = useInput();
  const filteredBlogPosts = posts.filter((post: Post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const customMeta: CustomMeta = {
    title: "Blog - Tony Pettigrew",
    description:
      "Thoughts on the web development, programming, tech, music and personal life.",
  };

  return (
    <PageLayout
      customMeta={customMeta}
      title="Blog"
      description={`I just started writing online this year. Web development, tech careers and the future of software development are what interest me as a writer. In total, I've written ${posts.length} articles on this blog. Use the search below to filter by title.`}
    >
      <div className="relative w-full mb-4">
        <SearchInput
          ariaLabel="Search Blog Posts"
          placeholder="Search blog posts"
          fullWidth
          {...searchBind}
        />
        <svg
          className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <Suspense fallback={null}>
        <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
          All Posts
        </h3>
        <div className="flex flex-col space-y-8">
          {!filteredBlogPosts.length && (
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              No posts found.
            </p>
          )}
          {filteredBlogPosts.map((post: Post) => (
            <BlogPost
              key={post.title}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </Suspense>
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const posts: Post[] = await getClient(preview).fetch(postsQuery);

  return { props: { posts }, revalidate: 10 };
};
