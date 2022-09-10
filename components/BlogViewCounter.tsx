import { useEffect } from "react";
import useSWR from "swr";

import fetcher from "lib/fetcher";
import { Views } from "lib/types";

interface Props {
  slug: string;
}

export default function BlogViewCounter({ slug }: Props) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = new Number(data?.total);

  useEffect(() => {
    const updateViewCount = () =>
      fetch(`/api/views/${slug}`, {
        method: "POST",
      });

    updateViewCount();
  }, [slug]);

  return <span>{`${views > 0 ? views.toLocaleString() : "–––"} views`}</span>;
}
