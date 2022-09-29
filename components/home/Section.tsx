import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
  id?: string;
}

export default function Section({ title, children, id }: Props) {
  return (
    <section>
      <h3
        id={id}
        className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white"
      >
        {title}
      </h3>
      {children}
    </section>
  );
}
