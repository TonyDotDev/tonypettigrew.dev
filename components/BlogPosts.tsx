import BlogPost from "components/BlogPost";
import GoToLink from "components/GoToLink";
import { Post } from "lib/types";

interface Props {
  posts: Post[];
}

export default function BlogPosts({ posts }: Props) {
  return (
    <div className='flex flex-col space-y-6'>
      <div className='flex flex-col space-y-4'>
        {posts.map((post) => (
          <BlogPost key={post._id} {...post} />
        ))}
      </div>
      <GoToLink href='/blog' text='Go to all blog posts' />
    </div>
  );
}
