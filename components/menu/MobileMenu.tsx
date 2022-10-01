import { useEffect } from "react";
import useDelayedRender from "use-delayed-render";
import cn from "classnames";

import { Hamburger, Close } from "components/svg";
import useToggle from "hooks/useToggle";
import MenuItem from "./MenuItem";
import { MenuItem as Item } from "./types";
import { menuItems } from "./menuItems";
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
            "flex flex-col absolute bg-gray-100 dark:bg-gray-900 w-full",
            rendered && styles.menuRendered
          )}
        >
          {menuItems.map((item: Item) => (
            <MenuItem key={item.href} {...item} />
          ))}
        </ul>
      )}
    </>
  );
}
