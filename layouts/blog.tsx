import { Suspense } from "react";
import { parseISO, format } from "date-fns";
import Image from "next/future/image";

import Container, { CustomMeta } from "components/Container";
import BlogViewCounter from "components/BlogViewCounter";
import { Post } from "lib/types";

interface Props {
  children: React.ReactNode;
  post: Post;
}

export default function BlogLayout({ children, post }: Props) {
  const customMeta: CustomMeta = {
    title: `${post.title} – Tony Pettigrew`,
    description: post.excerpt,
    date: new Date(post.date).toISOString(),
    type: "article",
  };
  return (
    <Container customMeta={customMeta}>
      <article className='flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16'>
        <h1 className='mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white'>
          {post.title}
        </h1>
        <div className='flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center'>
          <div className='flex items-center'>
            <Image
              alt='Tony Pettigrew'
              height={24}
              width={24}
              sizes='20vw'
              src='/avatar.jpeg'
              className='rounded-full'
            />
            <p className='ml-2 text-sm text-gray-700 dark:text-gray-300'>
              {"Tony Pettigrew / "}
              {format(parseISO(post.date), "MMMM dd, yyyy")}
            </p>
          </div>
          <p className='mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0'>
            {post.readingTime}
            {` • `}
            <BlogViewCounter slug={post.slug} />
          </p>
        </div>
        <Suspense fallback={null}>
          <div className='w-full mt-4 prose dark:prose-dark max-w-none'>{children}</div>
        </Suspense>
      </article>
    </Container>
  );
}
