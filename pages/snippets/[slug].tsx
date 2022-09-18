import { MDXRemote } from "next-mdx-remote";
import { GetStaticPaths, GetStaticProps } from "next";

import SnippetLayout from "layouts/snippet";
import { snippetsQuery, snippetSlugsQuery } from "lib/queries";
import { sanityClient, getClient } from "lib/sanity-server";
import { mdxToHtml } from "lib/mdx";
import { Snippet } from "lib/types";

export default function SnippetsPage({ snippet }: { snippet: Snippet }) {
  return (
    <SnippetLayout snippet={snippet}>
      <MDXRemote {...snippet.content} />
    </SnippetLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(snippetSlugsQuery);
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const { snippet } = await getClient(preview).fetch(snippetsQuery, {
    slug: params?.slug,
  });

  if (!snippet) {
    return { notFound: true };
  }

  const { html } = await mdxToHtml(snippet.content);

  return {
    props: {
      snippet: {
        ...snippet,
        content: html,
      },
    },
  };
};
