import { type NextRequest } from "next/server";
import { getMyProfile } from "lib/github";
import { ProfileData } from "lib/types";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  const response = await getMyProfile();
  const user: ProfileData = await response.json();

  return new Response(JSON.stringify({ user }), {
    status: 200,
    headers: {
      "content-type": "application/json",
      "cache-control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
