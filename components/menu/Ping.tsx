import React from "react";

export default function Ping() {
  return (
    <span className="flex h-2 w-2 relative mr-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
    </span>
  );
}
