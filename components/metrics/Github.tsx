import useSWR from "swr";

import fetcher from "lib/fetcher";
import { ProfileData } from "lib/types";
import MetricCard from "components/metrics/Card";

export default function ReposCountCard() {
  const { data } = useSWR<ProfileData>("https://api.github.com/users/TonyDotDev", fetcher);

  return (
    <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full'>
      <MetricCard
        header='Github Repositories'
        link={data?.repositories_url || "#"}
        metric={data?.public_repos || ""}
      />
      <MetricCard
        header='Github Gists'
        link={data?.gists_url || "#"}
        metric={data?.public_gists || ""}
      />
    </div>
  );
}
