import { GetStaticProps } from "next";

import Container, { CustomMeta } from "components/Container";
import PortfolioProject from "components/PortfolioProject";
import { getClient } from "lib/sanity-server";
import { Project } from "lib/types";
import { allProjectsQuery } from "lib/queries";

interface Props {
  projects: Project[];
}

export default function dashboard({ projects }: Props) {
  const customMeta: CustomMeta = {
    title: "Portfolio - Tony Pettigrew",
    description:
      "My portfolio, which contains professional and personal projects.",
  };

  const professionalProjects = projects?.filter(
    (project) => project.isProfessional
  );
  const personalProjects = projects?.filter(
    (project) => !project.isProfessional
  );

  return (
    <Container customMeta={customMeta}>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Portfolio
        </h1>
        <div>
          <p className="text-gray-600 dark:text-gray-400">
            My portfolio, which contains&nbsp;
            <a
              href="#professional"
              className="text-gray-900 dark:text-gray-100 underline"
            >
              professional
            </a>
            &nbsp;and&nbsp;
            <a
              href="#personal"
              className="text-gray-900 dark:text-gray-100 underline"
            >
              personal
            </a>
            &nbsp;portfolio projects.
          </p>
        </div>
        <h2
          id="professional"
          className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white"
        >
          Professional
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Projects that I have contributed to as an independant contractor.
        </p>
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
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          {personalProjects?.map((project) => (
            <PortfolioProject key={project._id} {...project} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const projects: Project[] = await getClient(preview).fetch(allProjectsQuery);

  console.log(projects, "TEST");

  return { props: { projects } };
};
