import { SvgProps } from "components/svg/types";

interface Props {
  header: string;
  link: string;
  metric: string | number | Number;
  Icon?: ({ className }: SvgProps) => JSX.Element;
}

export default function MetricCard({ header, link, metric, Icon }: Props) {
  return (
    <div
      className={`relative flex flex-col items-center bg-white dark:bg-gray-900 border rounded-lg p-4 max-w-72 w-full border-gray-200 dark:border-gray-700`}
    >
      {Icon && (
        <Icon
          className={`w-4 h-4 absolute top-0 left-0 ml-4 mt-4 stroke-green-500`}
        />
      )}

      <p className={`mt-2 text-3xl font-bold spacing-sm text-green-500`}>
        {metric > 0 ? metric.toLocaleString() : "-"}
      </p>
      <a
        className="flex flex-col items-center"
        aria-label={header}
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        <div className="flex items-center text-gray-900 dark:text-gray-100">
          {header}
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </a>
    </div>
  );
}
