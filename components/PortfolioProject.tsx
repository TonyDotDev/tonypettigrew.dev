import { ExternalLink } from "./svg";
import { Project } from "lib/types";

function getColor(company: string | undefined) {
  switch (company) {
    case "Dan Ganja":
      return "pink-500";

    case "Altcoin Ninjas":
      return "yellow-500";

    case "Pettigrew Properties":
      return "teal-500";

    case "GameLow":
      return "violet-500";

    case "Motus | ONE":
      return "blue-500";

    default:
      return "blue-500";
  }
}

export default function PortfolioProject({
  title,
  description,
  company,
  githubUrl,
  url,
  technologies,
}: Project) {
  const color = getColor(company);

  return (
    <article className="flex flex-col space-y-8 justify-between items-center border-b border-gray-400 pb-4">
      <div className="text-center flex flex-col items-center space-y-4">
        <div
          className={`flex items-center justify-center w-full h-36 rounded text-3xl font-bold p-4 text-white dark:text-black bg-${color}`}
        >
          {company}
        </div>
        <div
          className={`flex flex-wrap justify-center space text-sm text-${color}`}
        >
          {technologies.map(
            (technology) =>
              technology && (
                <p key={technology._id} className={`mr-4`}>
                  {technology.label}
                </p>
              )
          )}
        </div>
        <h3 className="text-lg">
          <span>{title}</span>
        </h3>

        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>

      <div className="flex space-x-4 underline">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-1"
          >
            <span>Github</span>
            <ExternalLink className="w-4 h-auto" />
          </a>
        )}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-1"
          >
            <span>Live</span>
            <ExternalLink className="w-4 h-auto" />
          </a>
        )}
      </div>
    </article>
  );
}
