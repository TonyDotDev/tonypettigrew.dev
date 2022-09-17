import Container, { CustomMeta } from "components/Container";
import SpotifyPlaylists from "components/SpotifyPlaylists";
import BlogViews from "components/metrics/BlogViews";
import SnippetViews from "components/metrics/SnippetViews";
import Github from "components/metrics/Github";
import ContributionGraph from "components/metrics/ContributionGraph";
import PageLayout from "layouts/page";

const Description = () => (
  <>
    This is my personal dashboard, heavily inspired by{" "}
    <a
      href="https://leerob.io/dashboard"
      rel="noreferrer"
      target="_blank"
      className="text-gray-900 dark:text-gray-100 underline"
    >
      Lee Robinson&apos;s Dashboard
    </a>
    . It utilizes Github, Spotify and my own API via headless functions to
    display metrics about myself and this website.
  </>
);

export default function Dashboard() {
  const customMeta: CustomMeta = {
    title: "Dashboard - Tony Pettigrew",
    description:
      "A personal dashboard showing different metrics using NextJS serverless functions.",
  };

  return (
    <PageLayout
      customMeta={customMeta}
      title="Dashboard"
      description={<Description />}
    >
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
        <BlogViews />
        <SnippetViews />
      </div>
      <Github />
      <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
        Github Contributions
      </h2>
      <ContributionGraph />
      <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
        My Playlists
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Here are my favorite, personally procured, playlists on Spotify:
      </p>
      <SpotifyPlaylists />
    </PageLayout>
  );
}
