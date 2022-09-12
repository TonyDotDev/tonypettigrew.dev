import useSWR from "swr";

import fetcher from "lib/fetcher";
import { Views } from "lib/types";
import MetricCard from "components/metrics/Card";
import { clientUrl } from "config";

export default function SnippetViews() {
  const { data } = useSWR<Views>("/api/views/snippet", fetcher);

  const blogViews = new Number(data?.total);
  const link = `${clientUrl}/snippets`;

  return <MetricCard header='Total Snippet Views' link={link} metric={blogViews} />;
}
