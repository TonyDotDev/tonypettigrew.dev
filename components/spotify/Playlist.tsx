import Image from "next/future/image";

import type { Playlist } from "types";

interface Props extends Playlist {
  ranking: number;
}

export default function Track({
  ranking,
  name,
  description,
  playlistUrl,
  playlistImage,
}: Props) {
  return (
    <div className="flex flex-row pb-4 items-center border-b border-gray-200 dark:border-gray-800 max-w-3xl w-full mt-8">
      <p className="text-sm font-bold text-gray-400 dark:text-gray-600">
        {ranking}
      </p>
      <div className="flex items-center">
        <Image
          className="ml-4"
          width={44}
          height={44}
          alt={name}
          src={playlistImage}
        />
        <div className="flex flex-col pl-3">
          <a
            className="font-medium text-gray-900 dark:text-gray-100 truncate w-60 sm:w-96 md:w-full"
            href={playlistUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </a>
          <p
            className="text-gray-500 truncate w-60 sm:w-96 md:w-full"
            color="gray.500"
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
