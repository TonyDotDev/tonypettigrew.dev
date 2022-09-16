// Blog Posts

const postFields = `
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
`;

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  }
}`;

export const postsQuery = `
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;

export const threePostsQuery = `
*[_type == "post" && (slug.current == $slug_1 || slug.current == $slug_2 || slug.current == $slug_3)] {
  ${postFields}
}
`;

export const limitedPostsQuery = `
*[_type == "post"] | order(date desc, _updatedAt desc) [$from..$to] {
  ${postFields}
}`;

// Code Snippets

const snippetFields = `
  _id,
  title,
  description,
  logo,
  "slug": slug.current,
  categories[]->{ _id, label, "slug": slug.current }
`;

export const allSnippetsQuery = `
*[_type == "snippet"] | order(date desc, _updatedAt desc) {
  ${snippetFields}
}`;

export const limitedSnippetsQuery = `
*[_type == "snippet"] | order(date desc, _updatedAt desc) [$from..$to] {
  ${snippetFields}
}`;

export const snippetsQuery = `
{
  "snippet": *[_type == "snippet" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${snippetFields}
  }
}`;

export const mostRecentSnippet = `{
  "snippet": *[_type == "snippet"] | order(_createdAt desc) [0] {
    content,
    ${snippetFields}
  }
}`;

export const snippetSlugsQuery = `
*[_type == "snippet" && defined(slug.current)][].slug.current
`;

// Categories

const categoryFields = `
  _id,
  "slug": slug.current,
  label
`;

export const allCategoriesQuery = `
*[_type == "category"] | order(date desc, _updatedAt desc) {
  ${categoryFields}
}`;

// Portfolio Projects
const projectFields = `
  _id,
  title,
  company,
  description,
  isProfessional,
  githubUrl,
  npmUrl,
  url,
  coverImage,
  "slug": slug.current,
  technologies[]->{ _id, label, "slug": slug.current }
`;
export const allProjectsQuery = `
*[_type == "project"] | order(date desc, _updatedAt desc) {
  ${projectFields}
}`;

// Technologies
export const allTechnologiesQuery = `
*[_type == "technology"] | order(date desc, _updatedAt desc) {
  ${categoryFields}
}`;
