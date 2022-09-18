import React from "react";

import { Container } from "components/container";
import { PageTitle, PageDescription, PageWidth } from "components/layout";
import type { CustomMeta } from "types";

interface Props {
  customMeta?: CustomMeta;
  children: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

export default function PageLayout({
  customMeta,
  children,
  title,
  description,
}: Props) {
  return (
    <Container customMeta={customMeta}>
      <PageWidth>
        <PageTitle>{title}</PageTitle>
        <PageDescription>{description}</PageDescription>
        {children}
      </PageWidth>
    </Container>
  );
}
