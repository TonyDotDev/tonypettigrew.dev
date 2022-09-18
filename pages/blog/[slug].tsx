import type { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";

import { mdxToHtml } from "lib/mdx";
import { postSlugsQuery, postQuery } from "lib/queries";
import { sanityClient, getClient } from "lib/sanity-server";
import BlogLayout from "layouts/blog";
import type { Post } from "types";

export default function PostPage({ post }: { post: Post }) {
  return (
    <BlogLayout post={post}>
      <MDXRemote {...post.content} />
    </BlogLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = await sanityClient.fetch(postSlugsQuery);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const { post } = await getClient(preview).fetch(postQuery, {
    slug: params?.slug,
  });

  if (!post) {
    return { notFound: true };
  }

  const { html, readingTime } = await mdxToHtml(post.content);

  return { props: { post: { ...post, content: html, readingTime } } };
};
