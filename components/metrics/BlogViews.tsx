import useSWR from "swr";

import fetcher from "lib/fetcher";
import { MetricCard } from "components/metrics";
import { clientUrl } from "config";
import type { Views } from "types";

export default function BlogViewsCard() {
  const { data } = useSWR<Views>("/api/views/blog", fetcher);

  const blogViews = new Number(data?.total);
  const link = `${clientUrl}/blog`;

  return (
    <MetricCard header="Total Blog Views" link={link} metric={blogViews} />
  );
}
