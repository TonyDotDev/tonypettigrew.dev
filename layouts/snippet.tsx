import Image from "next/future/image";
import type { PropsWithChildren } from "react";

import { Container } from "components/container";
import ViewCounter from "components/ViewCounter";
import { urlForImage } from "lib/sanity";
import type { Snippet, CustomMeta } from "types";

export default function SnippetLayout({
  children,
  snippet,
}: PropsWithChildren<{ snippet: Snippet }>) {
  const customMeta: CustomMeta = {
    title: `${snippet.title} - Code Snippet`,
    description:
      "A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks.",
  };
  return (
    <Container customMeta={customMeta}>
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <div className="flex justify-between w-full mb-8">
          <div>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              {snippet.title}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              {snippet.description}
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
              <ViewCounter slug={snippet.slug} type="snippet" />
            </p>
          </div>
          <div className="mt-2 sm:mt-0">
            <Image
              alt={snippet.title}
              height={48}
              width={48}
              src={urlForImage(snippet.logo).url()}
              className="rounded-full"
            />
          </div>
        </div>

        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
