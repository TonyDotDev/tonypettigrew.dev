import Container, { CustomMeta } from "components/Container";
import SpotifyPlaylists from "components/SpotifyPlaylists";
import BlogViews from "components/metrics/BlogViews";

export default function dashboard() {
  const customMeta: CustomMeta = {
    title: "Dashboard - Tony Pettigrew",
    description:
      "A personal dashboard showing different metrics using NextJS serverless functions.",
  };
  return (
    <Container customMeta={customMeta}>
      <div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16'>
        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
          Dashboard
        </h1>
        <div className='mb-8'>
          <p className='text-gray-600 dark:text-gray-400 mb-4'>
            This is my personal dashboard, heavily inspired by &nbsp;
            <a
              href='https://leerob.io/dashboard'
              rel='noreferrer'
              target='_blank'
              className='text-gray-900 dark:text-gray-100 underline'
            >
              Lee Robinson&apos;s Dashboard
            </a>
            . It utilizes Github, Spotify and my own API via headless functions to display metrics
            about myself and this website.
          </p>
        </div>
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full'>
          <BlogViews />
        </div>
        <h2 className='font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white'>
          My Playlists
        </h2>
        <p className='text-gray-600 dark:text-gray-400 mb-4'>
          Here are my favorite, personally procured, playlists on Spotify:
        </p>
        <SpotifyPlaylists />
      </div>
    </Container>
  );
}
