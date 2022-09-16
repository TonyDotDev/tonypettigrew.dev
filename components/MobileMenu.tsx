import useDelayedRender from "use-delayed-render";
import cn from "classnames";
import Link from "next/link";

import Hamburger from "components/svg/Hamburger";
import Close from "./svg/Close";
import useToggle from "hooks/useToggle";
import { useEffect } from "react";
import styles from "styles/mobile-menu.module.css";

export default function MobileMenu() {
  const [isOpen, toggle] = useToggle();
  const { mounted, rendered } = useDelayedRender(isOpen, {
    enterDelay: 20,
    exitDelay: 300,
  });

  const toggleMenu = () => {
    toggle();
    document.body.style.overflow = isOpen ? "" : "hidden";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <button
        className={cn(styles.burger, "visible md:hidden")}
        aria-label="Toggle Menu"
        onClick={toggleMenu}
      >
        <Hamburger data-hide={isOpen} />
        <Close data-hide={!isOpen} />
      </button>
      {mounted && (
        <ul
          className={cn(
            styles.menu,
            "flex flex-col absolute bg-gray-100 dark:bg-gray-900",
            rendered && styles.menuRendered
          )}
        >
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold rounded"
            style={{
              transitionDelay: "150ms",
            }}
          >
            <Link href="/">
              <a className="flex w-auto py-4">Home</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: "175ms" }}
          >
            <Link href="/portfolio">
              <a className="flex w-auto pb-4">Portfolio</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: "200ms" }}
          >
            <Link href="/blog">
              <a className="flex w-auto pb-4">Blog</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: "250ms" }}
          >
            <Link href="/snippets">
              <a className="flex w-auto pb-4">Snippets</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: "275ms" }}
          >
            <Link href="/dashboard">
              <a className="flex w-auto pb-4">Dashboard</a>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}
