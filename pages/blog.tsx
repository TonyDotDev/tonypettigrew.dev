import { Suspense, useState } from "react";
import { InferGetStaticPropsType, GetStaticProps } from "next";

import Container, { CustomMeta } from "components/Container";
import BlogPost from "components/BlogPost";
import { postsQuery } from "lib/queries";
import { getClient } from "lib/sanity-server";
import { Post } from "lib/types";

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts.filter((post: Post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const customMeta: CustomMeta = {
    title: "Blog - Tony Pettigrew",
    description: "Thoughts on the web development, programming, tech, music and personal life.",
  };

  return (
    <Container customMeta={customMeta}>
      <div className='flex flex-col items-start justify-center max-w-2xl mx-auto mb-16'>
        <h1 className='mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white'>
          Blog
        </h1>
        <p className='mb-4 text-gray-600 dark:text-gray-400'>
          {`I just started writing online this year. Web development, tech careers and the future of software development are what interest me as a writer. In total, I've written ${posts.length} articles on this blog. Use the search below to filter by title.`}
        </p>
        <div className='relative w-full mb-4'>
          <input
            aria-label='Search articles'
            type='text'
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder='Search articles'
            className='block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100'
          />
          <svg
            className='absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </div>
        <Suspense fallback={null}>
          <h3 className='mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white'>
            All Posts
          </h3>
          <div className='flex flex-col space-y-8'>
            {!filteredBlogPosts.length && (
              <p className='mb-4 text-gray-600 dark:text-gray-400'>No posts found.</p>
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
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const posts: Post[] = await getClient(preview).fetch(postsQuery);

  return { props: { posts } };
};
