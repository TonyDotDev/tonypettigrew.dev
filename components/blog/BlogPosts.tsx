import { BlogPost } from "components/blog";
import GoToLink from "components/GoToLink";
import type { Post } from "types";

interface Props {
  posts: Post[];
}

export default function BlogPosts({ posts }: Props) {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-8">
        {posts.map((post) => (
          <BlogPost key={post._id} {...post} />
        ))}
      </div>
      <GoToLink href="/blog" text="Go to all blog posts" />
    </div>
  );
}
