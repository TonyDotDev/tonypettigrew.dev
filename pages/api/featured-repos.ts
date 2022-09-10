import { type NextRequest } from "next/server";
import { getRepositoryFactory } from "lib/github";
import { Repository, RepositoryData } from "lib/types";

export const config = {
  runtime: "experimental-edge",
};

const repositoryNames: string[] = [
  "tonypettigrew.dev",
  "express-ts-boilerplate",
  "generator-react-tsx-component",
];

export default async function handler(req: NextRequest) {
  const responses: RepositoryData[] = await Promise.all(
    repositoryNames.map(async (repository) => {
      const response = await getRepositoryFactory(repository)();
      return await response.json();
    })
  );

  const repositories: Repository[] = responses.map((response) => {
    return {
      id: response.id,
      fullName: response.full_name,
      description: response.description,
      stargazers: response.stargazers_count,
      watchers: response.watchers_count,
      openIssues: response.open_issues_count,
      url: response.html_url,
    };
  });

  // [
  //   {
  //     id: "fds",
  //     fullName: "TonyDotDev/express-ts-boilerplate",
  //     description: "Boilerplate repository for express back end in node.",
  //     stargazers: 0,
  //     watchers: 0,
  //     openIssues: 3,
  //     url: "https://www.tonypettigrew.dev",
  //   },
  //   {
  //     id: "fds",
  //     fullName: "TonyDotDev/express-ts-boilerplate",
  //     description: "Boilerplate repository for express back end in node.",
  //     stargazers: 0,
  //     watchers: 0,
  //     openIssues: 3,
  //     url: "https://www.tonypettigrew.dev",
  //   },
  //   {
  //     id: "fds",
  //     fullName: "TonyDotDev/express-ts-boilerplate",
  //     description: "Boilerplate repository for express back end in node.",
  //     stargazers: 0,
  //     watchers: 0,
  //     openIssues: 3,
  //     url: "https://www.tonypettigrew.dev",
  //   },
  // ],

  return new Response(
    JSON.stringify({
      repositories,
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "public, s-maxage=86400, stale-while-revalidate=43200",
      },
    }
  );
}
