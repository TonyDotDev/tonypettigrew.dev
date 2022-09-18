import prisma from "lib/prisma";
import { threePostsQuery } from "lib/queries";
import { getClient } from "lib/sanity-server";
import { Post } from "types";

export default async function getPopularPosts() {
  const topThreeSlugs = await (
    await prisma.blogViews.findMany({ orderBy: [{ count: "desc" }], take: 3 })
  ).map((post) => post.slug);

  const posts: Post[] = await getClient(false).fetch(threePostsQuery, {
    slug_1: topThreeSlugs[0] || "",
    slug_2: topThreeSlugs[1] || "",
    slug_3: topThreeSlugs[2] || "",
  });

  const orderedPosts = posts.map((_post, index) => {
    const slug = topThreeSlugs[index];
    const post = posts.find((post) => post.slug === slug);
    return post;
  });

  const filteredPosts: Post[] = orderedPosts.filter(
    (post: Post | undefined): post is Post => post !== undefined
  );

  return filteredPosts;
}
