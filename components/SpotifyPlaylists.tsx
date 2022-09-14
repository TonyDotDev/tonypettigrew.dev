import useSWR from "swr";

import fetcher from "lib/fetcher";
import { Playlists } from "lib/types";
import Playlist from "components/Playlist";

export default function SpotifyPlaylists() {
  const { data } = useSWR<Playlists>("/api/get-playlists", fetcher, {
    dedupingInterval: Infinity,
  });

  if (!data?.playlists) {
    return null;
  }

  return (
    <>
      {data.playlists.map((playlist, index) => (
        <Playlist ranking={index + 1} key={playlist.id} {...playlist} />
      ))}
    </>
  );
}
