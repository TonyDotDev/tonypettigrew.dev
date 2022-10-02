import { ServerResponse } from "http";
import { sanityClient } from "lib/sanity-server";

import { postSlugsQuery, snippetSlugsQuery } from "lib/queries";

const createSitemap = (
  slugs: string[]
) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${slugs
          .map((slug: string) => {
            return `
                <url>
                    <loc>${`https://tonypettigrew.dev/${slug}`}</loc>
                </url>
            `;
          })
          .join("")}
    </urlset>
`;
export async function getServerSideProps({ res }: { res: ServerResponse }) {
  const allPosts = await sanityClient.fetch(postSlugsQuery);
  const allSnippets = await sanityClient.fetch(snippetSlugsQuery);
  const allPages = [
    ...allPosts.map((slug: string) => `blog/${slug}`),
    ...allSnippets.map((slug: string) => `snippet/${slug}`),
    "",
    "blog",
    "dashboard",
    "snippets",
    "portfolio",
  ];

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );
  res.write(createSitemap(allPages));
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  return null;
}
