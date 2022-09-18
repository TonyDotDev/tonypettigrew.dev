import { useEffect } from "react";
import useSWR from "swr";

import fetcher from "lib/fetcher";
import type { Views } from "types";

interface Props {
  slug: string;
  type: "blog" | "snippet";
}

export default function BlogViewCounter({ slug, type }: Props) {
  const { data } = useSWR<Views>(`/api/views/${type}/${slug}`, fetcher);
  const views = new Number(data?.total);

  useEffect(() => {
    const updateViewCount = () =>
      fetch(`/api/views/${type}/${slug}`, {
        method: "POST",
      });

    updateViewCount();
  }, [slug, type]);

  return <span>{`${views > 0 ? views.toLocaleString() : "–––"} views`}</span>;
}
