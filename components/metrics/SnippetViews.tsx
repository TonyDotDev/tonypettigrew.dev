import useSWR from "swr";

import fetcher from "lib/fetcher";
import { Views } from "types";
import { MetricCard } from "components/metrics";
import { clientUrl } from "config";
import { Scissors } from "components/svg";

export default function SnippetViews() {
  const { data } = useSWR<Views>("/api/views/snippet", fetcher);

  const blogViews = new Number(data?.total);
  const link = `${clientUrl}/snippets`;

  return (
    <MetricCard
      header="Total Snippet Views"
      link={link}
      metric={blogViews}
      Icon={Scissors}
    />
  );
}
