import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

export default function GoToLink({ href, text }: Props) {
  return (
    <Link href={href}>
      <a className="flex items-center space-x-2">
        <span className="underline">{text}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-arrow-right w-5 h-5"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
    </Link>
  );
}
