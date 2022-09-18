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

export interface PlaylistData
  extends Omit<Playlist, "playlistImage | playlistUrl"> {
  images: ImagesData[];
  external_urls: ExternalUrlsData;
}
