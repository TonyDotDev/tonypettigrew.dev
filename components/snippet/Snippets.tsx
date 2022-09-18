import CodeSnippet from "./CodeSnippet";
import GoToLink from "components/GoToLink";
import type { Snippet } from "types";

interface Props {
  snippets: Snippet[];
}

function Snippets({ snippets }: Props) {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-4 space-x-0 sm:flex-row sm:space-x-4 sm:space-y-0">
        {snippets.map((snippet) => (
          <CodeSnippet key={snippet._id} {...snippet} />
        ))}
      </div>
      <GoToLink href="/snippets" text="Go to all snippets" />
    </div>
  );
}

export default Snippets;
