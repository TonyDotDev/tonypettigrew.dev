import { type NextRequest } from "next/server";
import { getPlaylists } from "lib/spotify";
import { PlaylistData, Playlist } from "types";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  const response = await getPlaylists();
  const { items } = await response.json();

  const playlists: Playlist[] = items?.map((playlist: PlaylistData) => {
    return {
      id: playlist.id,
      name: playlist.name,
      description: playlist.description,
      playlistImage: playlist.images[0].url,
      playlistUrl: playlist.external_urls.spotify,
    };
  });

  return new Response(JSON.stringify({ playlists }), {
    status: 200,
    headers: {
      "content-type": "application/json",
      "cache-control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
