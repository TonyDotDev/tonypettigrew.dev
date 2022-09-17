import React from "react";

import Container, { CustomMeta } from "components/Container";
import PageTitle from "components/layout/PageTitle";
import PageDescription from "components/layout/PageDescription";
import PageWidth from "components/layout/PageWidth";

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
