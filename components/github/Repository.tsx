import type { Repository as Props } from "types";

interface RepositoryProps extends Props {
  gradient: string;
}

export default function Repository({
  fullName,
  description,
  url,
  stargazers,
  watchers,
  openIssues,
  gradient,
}: RepositoryProps) {
  return (
    <a
      href={url}
      className={`p-1 flex items-center justify-center rounded ${gradient}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="space-y-6 w-full h-full bg-gray-50 dark:bg-neutral-900 p-4">
        <div>
          <h4 className="text-xl">{fullName}</h4>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>

        <div className="border-b h-0 my-6 w-full border-gray-400" />

        <div className="flex align-center space-x-6 text-xs">
          <div className="flex space-x-1 items-center justify-center">
            <span>{stargazers}</span>
            <span>Stars</span>

            {/* <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              preserveAspectRatio='="none'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-star w-4 h-4'
            >
              <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
            </svg> */}
          </div>
          <div className="flex space-x-1 items-center justify-center">
            <span>{watchers}</span>
            <span>Watchers</span>
            {/* <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              preserveAspectRatio='none'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-eye w-4 h-4'
            >
              <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
              <circle cx='12' cy='12' r='3'></circle>
            </svg> */}
          </div>
          <div className="flex space-x-1 items-center justify-center">
            <span>{openIssues}</span>
            <span>Open issues</span>
            {/* <svg
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='none'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-alert-circle w-4 h-4'
            >
              <circle cx='12' cy='12' r='10'></circle>
              <line x1='12' y1='8' x2='12' y2='12'></line>
              <line x1='12' y1='16' x2='12.01' y2='16'></line>
            </svg> */}
          </div>
        </div>
      </div>
    </a>
  );
}
