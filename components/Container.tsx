import Head from "next/head";
import { useRouter } from "next/router";
import NextLink from "next/link";
import cn from "classnames";

import Footer from "./Footer";
import DarkModeToggle from "./DarkModeToggle";

interface NavItemProps {
  href: string;
  text: string;
}

function NavItem({ href, text }: NavItemProps) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? "font-semibold text-gray-800 dark:text-gray-200"
            : "font-normal text-gray-600 dark:text-gray-400",
          "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
        )}
      >
        <span className='capsize'>{text}</span>
      </a>
    </NextLink>
  );
}

export interface CustomMeta {
  date?: string;
  title?: string;
  description?: string;
  type?: string;
}

interface Props {
  customMeta?: CustomMeta;
  children: React.ReactNode;
}

export default function Container({ customMeta = {}, children }: Props) {
  const router = useRouter();

  const meta = {
    title: "Tony Pettigrew - Developer, writer, creator.",
    description: `Front-end developer, JavaScript enthusiast, and course creator.`,
    image: "",
    type: "website",
    ...customMeta,
  };

  return (
    <div className='bg-gray-50 dark:bg-gray-900'>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta property='og:url' content={`https://tonypettigrew.dev${router.asPath}`} />
        <link rel='canonical' href={`https://tonypettigrew.dev${router.asPath}`} />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Tony Pettigrew' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        {meta.date && <meta property='article:published_time' content={meta.date} />}
      </Head>
      <div className='flex flex-col justify-center px-8'>
        <nav className='flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-gray-50  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100'>
          <a href='#skip' className='skip-nav'>
            Skip to content
          </a>
          <div className='ml-[-0.60rem]'>
            <NavItem href='/' text='Home' />
            {/* <NavItem href='/dashboard' text='Dashboard' /> */}
            <NavItem href='/projects' text='Projects' />
            <NavItem href='/blog' text='Blog' />
            <NavItem href='/snippets' text='Snippets' />
          </div>
          <DarkModeToggle />
        </nav>
      </div>
      <main id='skip' className='flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900'>
        {children}
        <Footer />
      </main>
    </div>
  );
}
