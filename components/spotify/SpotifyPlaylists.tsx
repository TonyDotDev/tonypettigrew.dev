import useSWR from "swr";

import fetcher from "lib/fetcher";
import { Playlist } from "components/spotify";
import type { Playlists } from "types";

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
