import { ExternalLink } from "./svg";
import { Project } from "types";

interface ColorClasses {
  bg: string;
  text: string;
}

function getColorClasses(company: string | null): ColorClasses {
  switch (company) {
    case "Dan Ganja":
      return { bg: "bg-pink-500", text: "text-pink-500" };

    case "Altcoin Ninjas":
      return { bg: "bg-yellow-500", text: "text-yellow-500" };

    case "Pettigrew Properties":
      return { bg: "bg-teal-500", text: "text-teal-500" };

    case "GameLow":
      return { bg: "bg-violet-500", text: "text-violet-500" };

    case "Motus | ONE":
      return { bg: "bg-blue-500", text: "text-blue-500" };

    case "Yeoman":
      return { bg: "bg-red-500", text: "text-red-500" };

    case "Mark It Down":
      return { bg: "bg-slate-500", text: "text-slate-500" };

    default:
      return { bg: "bg-blue-500", text: "text-blue-500" };
  }
}

export default function PortfolioProject({
  title,
  description,
  company,
  githubUrl,
  url,
  technologies,
  npmUrl,
  slug,
}: Project) {
  const colorClasses: ColorClasses = getColorClasses(company);

  return (
    <article className="flex flex-col space-y-8 justify-between items-center border-b border-gray-400 pb-4">
      <div className="text-center flex flex-col items-center space-y-4">
        <div
          className={`flex items-center justify-center w-full h-36 rounded text-3xl font-bold p-4 text-white dark:text-black ${colorClasses.bg}`}
        >
          {company}
        </div>
        <div
          className={`flex flex-wrap justify-center space text-sm ${colorClasses.text}`}
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
        {npmUrl && (
          <a
            href={npmUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-1"
          >
            <span>NPM</span>
            <ExternalLink className="w-4 h-auto" />
          </a>
        )}
      </div>
    </article>
  );
}
