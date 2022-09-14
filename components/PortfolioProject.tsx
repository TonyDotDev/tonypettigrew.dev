import Link from "next/link";

export default function PortfolioProject() {
  return (
    <Link href='#'>
      <a className='flex flex-col space-y-8'>
        <div>
          <h3 className='text-lg'>Altcoint Ninjas Trading Platform</h3>
          <p className='text-gray-600 dark:text-gray-400'>
            A crypto investment/management platform.
          </p>
          <div className='flex flex-wrap space text-sm text-blue-500'>
            <p className='mr-4'>NextJS</p>
            <p className='mr-4'>TailwindCss</p>
            <p className='mr-4'>Sanity</p>
            <p className='mr-4'>Prisma</p>
            <p className='mr-4'>PostgreSQL</p>
            <p className='mr-4'>NextJS</p>
          </div>
        </div>

        <div className='flex space-x-4'>
          <a href='#'>Github</a>
          <a href='#'>Live</a>
        </div>
      </a>
    </Link>
  );
}
