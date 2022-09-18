import type { GetStaticProps } from "next";

import PortfolioProject from "components/PortfolioProject";
import SearchInput from "components/SearchInput";
import { getClient } from "lib/sanity-server";
import { allProjectsQuery } from "lib/queries";
import useInput from "hooks/useInput";
import React from "react";
import PageLayout from "layouts/page";
import type { Project, CustomMeta } from "types";

const Description = () => (
  <>
    My portfolio, which contains{" "}
    <a
      href="#professional"
      className="text-gray-900 dark:text-gray-100 underline"
    >
      professional
    </a>{" "}
    and{" "}
    <a href="#personal" className="text-gray-900 dark:text-gray-100 underline">
      personal
    </a>{" "}
    portfolio projects.
  </>
);

interface Props {
  projects: Project[];
}

export default function Portfolio({ projects }: Props) {
  const { bind: searchBind, value: searchValue } = useInput();

  const customMeta: CustomMeta = {
    title: "Portfolio - Tony Pettigrew",
    description:
      "My portfolio, which contains professional and personal projects.",
  };

  const filteredProjects: Project[] = projects?.filter(
    (project) =>
      project.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      project.company?.toLowerCase().includes(searchValue.toLowerCase()) ||
      project.description.toLowerCase().includes(searchValue.toLowerCase())
  );

  const professionalProjects: Project[] = filteredProjects?.filter(
    (project) => project.isProfessional
  );

  const personalProjects: Project[] = filteredProjects?.filter(
    (project) => !project.isProfessional
  );

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <PageLayout
      customMeta={customMeta}
      title="Portfolio"
      description={<Description />}
    >
      <form
        name="Filter portfolio projects"
        onSubmit={handleFormSubmit}
        className="relative w-full mb-4 flex space-x-1"
      >
        <SearchInput
          ariaLabel="Search Projects"
          placeholder="Search projects"
          fullWidth
          {...searchBind}
        />
      </form>
      <h2
        id="professional"
        className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white"
      >
        Professional
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Projects that I have contributed to as an independant contractor.
      </p>
      {!professionalProjects.length && (
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          No projects found.
        </p>
      )}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 my-2 w-full">
        {professionalProjects?.map((project) => (
          <PortfolioProject key={project._id} {...project} />
        ))}
      </div>
      <h2
        id="personal"
        className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white"
      >
        Personal
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Projects created for fun, learning and labor of love.
      </p>
      {!personalProjects.length && (
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          No projects found.
        </p>
      )}
      {
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          {personalProjects?.map((project) => (
            <PortfolioProject key={project._id} {...project} />
          ))}
        </div>
      }
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const projects: Project[] = await getClient(preview).fetch(allProjectsQuery);
  return { props: { projects } };
};
