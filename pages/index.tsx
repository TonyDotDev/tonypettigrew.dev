import type { GetStaticProps } from "next";

import { Container } from "components/container";
import { FeaturedRepositories } from "components/github";
import BlogPosts from "components/blog/BlogPosts";
import { Snippets } from "components/snippet";
import { PageWidth } from "components/layout";
import { Landing, Section } from "components/home";
import { getClient } from "lib/sanity-server";
import { limitedSnippetsQuery } from "lib/queries";
import getPopularPosts from "utils/getPopularPosts";
import type { Snippet, Post } from "types";

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
          <Section title="Featured Repositories" id="featured-repositories">
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

  const posts: Post[] = await getPopularPosts();

  return {
    props: {
      snippets,
      posts,
    },
  };
};
