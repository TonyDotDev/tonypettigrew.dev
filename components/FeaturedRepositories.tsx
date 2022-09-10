import useSWR from "swr";

import Repository from "./Repository";
import fetcher from "lib/fetcher";
import { Repositories } from "lib/types";

export default function FeaturedRepositories() {
  const { data } = useSWR<Repositories>("/api/featured-repos", fetcher, {
    dedupingInterval: 1000 * 60,
  });

  if (!data) {
    return null;
  }

  const gradientClasses = [
    "bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400",
    "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
    "bg-gradient-to-r from-yellow-200 via-green-200 to-green-300",
  ];

  return (
    <div className='space-y-4 w-full flex flex-col'>
      {data.repositories.map((repository, index) => (
        <Repository key={repository.id} gradient={gradientClasses[index]} {...repository} />
      ))}
    </div>
  );
}
