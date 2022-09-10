import { MDXRemoteSerializeResult } from "next-mdx-remote";

// Blog
export type Post = {
  _id: string;
  slug: string;
  content: MDXRemoteSerializeResult;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  readingTime: string;
  tweets: any[];
};

// Snippet
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

// Spotify
export type Song = {
  songUrl: string;
  artist: string;
  title: string;
  albumImage: string;
};

type ImagesData = {
  width: number;
  height: number;
  url: string;
};

type ExternalUrlsData = {
  spotify: string;
};

type ArtistData = {
  name: string;
};

export type Track = {
  name: string;
  external_urls: ExternalUrlsData;
  artists: ArtistData[];
  album: { images: ImagesData[] };
};

export type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type TopTracks = {
  tracks: Song[];
};

export type Playlists = {
  playlists: Playlist[];
};

export interface Playlist {
  id: string;
  name: string;
  description: string;
  playlistImage: string;
  playlistUrl: string;
}

export interface PlaylistData extends Omit<Playlist, "playlistImage | playlistUrl"> {
  images: ImagesData[];
  external_urls: ExternalUrlsData;
}

// Github
export interface Repository {
  id: string;
  fullName: string;
  description: string;
  stargazers: number;
  watchers: number;
  openIssues: number;
  url: string;
}

export interface RepositoryData {
  id: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  watchers_count: number;
  open_issues_count: number;
  html_url: string;
}

export type Repositories = {
  repositories: Repository[];
};

// Views
export interface Views {
  total: string;
}
