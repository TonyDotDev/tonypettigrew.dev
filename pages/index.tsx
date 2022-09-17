import type { GetStaticProps } from "next";

import Container from "components/Container";
import FeaturedRepositories from "components/FeaturedRepositories";
import BlogPosts from "components/BlogPosts";
import Snippets from "components/Snippets";
import { getClient } from "lib/sanity-server";
import { limitedSnippetsQuery, threePostsQuery } from "lib/queries";
import { Snippet, Post } from "lib/types";
import prisma from "lib/prisma";
import PageWidth from "components/layout/PageWidth";
import Section from "components/home/Section";
import Landing from "components/home/Landing";

interface Props {
  snippets: Snippet[];
  posts: Post[];
}

export default function Home({ snippets, posts }: Props) {
  return (
    <Container>
      <PageWidth>
        <Landing />
        <div className="space-y-20">
          <Section title="Featured Repositories">
            <FeaturedRepositories />
          </Section>
          <Section title="Popular Blog Posts">
            <BlogPosts posts={posts} />
          </Section>
          <Section title="Newest Snippets">
            <Snippets snippets={snippets} />
          </Section>
        </div>
      </PageWidth>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const snippets: Snippet[] = await getClient(preview).fetch(
    limitedSnippetsQuery,
    {
      from: 0,
      to: 1,
    }
  );

  const topThreeSlugs = await (
    await prisma.blogViews.findMany({ orderBy: [{ count: "desc" }], take: 3 })
  ).map((post) => post.slug);

  const posts: Post[] = await getClient(preview).fetch(threePostsQuery, {
    slug_1: topThreeSlugs[0] || "",
    slug_2: topThreeSlugs[1] || "",
    slug_3: topThreeSlugs[2] || "",
  });

  const orderedPosts = posts
    .map((_post, index) => {
      const slug = topThreeSlugs[index];
      const post = posts.find((post) => post.slug === slug);
      return post;
    })
    .filter((post) => !!post);

  return {
    props: {
      snippets: snippets || [],
      posts: orderedPosts || [],
    },
  };
};
