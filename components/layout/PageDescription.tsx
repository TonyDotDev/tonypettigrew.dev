import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function PageDescription({ children }: Props) {
  return <p className="mb-4 text-gray-600 dark:text-gray-400">{children}</p>;
}
