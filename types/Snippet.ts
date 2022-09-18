import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type Snippet = {
  _id: string;
  slug: string;
  content: MDXRemoteSerializeResult;
  title: string;
  description: string;
  logo: string;
  categories: Category[];
};

export interface Category {
  _id: string;
  slug: string;
  label: string;
}
