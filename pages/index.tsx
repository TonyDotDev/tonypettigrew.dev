import { Suspense } from "react";
import Image from "next/future/image";
import type { GetStaticProps } from "next";

import Container from "components/Container";
import SpotifyPlaylists from "components/SpotifyPlaylists";
import FeaturedRepositories from "components/FeaturedRepositories";
import { getClient } from "lib/sanity-server";
import { limitedSnippetsQuery, limitedPostsQuery } from "lib/queries";
import { mdxToHtml } from "lib/mdx";
import { Snippet, Post } from "lib/types";
import BlogPosts from "components/BlogPosts";
import Snippets from "components/Snippets";

interface Props {
  snippets: Snippet[];
  posts: Post[];
}

export default function Home({ snippets, posts }: Props) {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className='flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16'>
          <div className='flex flex-col-reverse sm:flex-row items-start'>
            <div className='flex flex-col pr-8'>
              <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white'>
                Tony Pettigrew
              </h1>
              <h2 className='text-gray-700 dark:text-gray-200 mb-4'>
                Software Engineer focused on <span className='font-semibold'>JavaScript</span>
              </h2>
              <p className='text-gray-600 dark:text-gray-400 mb-16'>
                Enthusiastically sharing my knowledge and experience in the industry. When I&apos;m
                not working, I create Spotify playlists for every occasion and go to as many
                sporting and music events as possible.
              </p>
            </div>
            <div className='w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto'>
              <Image
                alt='Tony Pettigrew'
                height={176}
                width={176}
                src='/avatar.jpeg'
                sizes='30vw'
                priority
                className='rounded-full filter grayscale'
              />
            </div>
          </div>
          <div className='space-y-20'>
            <section>
              <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white'>
                Featured Repositories
              </h3>
              <FeaturedRepositories />
            </section>
            <section>
              <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white'>
                Popular Blog Posts
              </h3>
              <BlogPosts posts={posts} />
            </section>
            <section>
              <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white'>
                Newest Snippets
              </h3>
              <Snippets snippets={snippets} />
            </section>
            <section>
              <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white'>
                My Playlists
              </h3>
              <SpotifyPlaylists />
            </section>
          </div>
        </div>
      </Container>
    </Suspense>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const snippets: Snippet[] = await getClient(preview).fetch(limitedSnippetsQuery, {
    from: 0,
    to: 1,
  });
  const posts: Post[] = await getClient(preview).fetch(limitedPostsQuery, { from: 0, to: 2 });

  return {
    props: {
      snippets: snippets || [],
      posts: posts || [],
    },
  };
};
