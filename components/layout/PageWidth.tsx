import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function PageWidth({ children }: Props) {
  return (
    <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
      {children}
    </div>
  );
}
