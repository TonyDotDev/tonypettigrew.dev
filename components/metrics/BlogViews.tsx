import useSWR from "swr";

import fetcher from "lib/fetcher";
import { Views } from "lib/types";
import MetricCard from "components/metrics/Card";
import { clientUrl } from "config";

export default function BlogViewsCard() {
  const { data } = useSWR<Views>("/api/views", fetcher);

  const blogViews = new Number(data?.total);
  const link = `${clientUrl}/blog`;

  console.log(link);

  return <MetricCard header='Total Blog Views' link={link} metric={blogViews} />;
}
