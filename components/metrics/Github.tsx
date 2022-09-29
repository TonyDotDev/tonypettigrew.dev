import useSWR from "swr";

import fetcher from "lib/fetcher";
import { MetricCard } from "components/metrics";
import type { ProfileData } from "types";
import { Github, Code } from "components/svg";

const REPOSITORIES_LINK = "https://github.com/TonyDotDev?tab=repositories";
const GISTS_LINK = "https://gist.github.com/TonyDotDev";

export default function ReposCountCard() {
  const { data } = useSWR<ProfileData>(
    "https://api.github.com/users/TonyDotDev",
    fetcher
  );

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
      <MetricCard
        header="Github Repositories"
        link={REPOSITORIES_LINK}
        metric={data?.public_repos || ""}
        Icon={Github}
      />
      <MetricCard
        header="Github Gists"
        link={GISTS_LINK}
        metric={data?.public_gists || ""}
        Icon={Code}
      />
    </div>
  );
}
