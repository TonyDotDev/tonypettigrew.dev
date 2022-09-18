import type { GetStaticProps } from "next";

import Container from "components/Container";
import FeaturedRepositories from "components/FeaturedRepositories";
import BlogPosts from "components/BlogPosts";
import Snippets from "components/Snippets";
import { getClient } from "lib/sanity-server";
import { limitedSnippetsQuery } from "lib/queries";
import { Snippet, Post } from "lib/types";
import PageWidth from "components/layout/PageWidth";
import Section from "components/home/Section";
import Landing from "components/home/Landing";
import getPopularPosts from "utils/getPopularPosts";

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

  const posts: Post[] = await getPopularPosts();

  return {
    props: {
      snippets,
      posts,
    },
  };
};
