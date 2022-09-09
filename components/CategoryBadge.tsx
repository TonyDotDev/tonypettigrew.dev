import { HandleCategoryBadgeClick } from "./CodeSnippet";

export default function CategoryBadge({
  label,
  slug,
  handleClick,
}: {
  label: string;
  slug: string;
  handleClick?: HandleCategoryBadgeClick;
}) {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (handleClick) handleClick(slug);
  };
  return (
    <button className='text-sm px-1 border rounded border-blue-500 text-blue-500' onClick={onClick}>
      {label}
    </button>
  );
}
