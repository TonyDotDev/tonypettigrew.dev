import Container, { CustomMeta } from "components/Container";
import PortfolioProject from "components/PortfolioProject";

export default function dashboard() {
  const customMeta: CustomMeta = {
    title: "Portfolio - Tony Pettigrew",
    description: "My portfolio, which contains professional and personal projects.",
  };
  return (
    <Container customMeta={customMeta}>
      <div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16'>
        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
          Portfolio
        </h1>
        <div className='mb-8'>
          <p className='text-gray-600 dark:text-gray-400 mb-4'>
            My portfolio, which contains&nbsp;
            <a href='#professional' className='text-gray-900 dark:text-gray-100 underline'>
              professional
            </a>
            &nbsp;and&nbsp;
            <a href='#personal' className='text-gray-900 dark:text-gray-100 underline'>
              personal
            </a>
            &nbsp;portfolio projects.
          </p>
        </div>
        <h2
          id='professional'
          className='font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white'
        >
          Professional
        </h2>
        <p className='text-gray-600 dark:text-gray-400 mb-4'>
          Projects that I have contributed to as an independant contractor.
        </p>
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full'>
          <PortfolioProject />
          <PortfolioProject />
          <PortfolioProject />
          <PortfolioProject />
          <PortfolioProject />
        </div>
        <h2
          id='personal'
          className='font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white'
        >
          Personal
        </h2>
        <p className='text-gray-600 dark:text-gray-400 mb-4'>
          Projects created for fun, learning and labor of love.
        </p>
      </div>
    </Container>
  );
}
