import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";

import useWindowSize from "hooks/useWindowSize";
import useMounted from "hooks/useMounted";

/**
 * * These components need to be dynamically imported instead of SSR'd because the tooltip data- information is
 * * generated dynamically on the front end by the calendar component.
 * */
const GitHubCalendar = dynamic(() => import("react-github-calendar"), {
  ssr: false,
});

const ReactTooltip = dynamic(() => import("react-tooltip"), {
  ssr: false,
});

interface Day {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export default function ContributionGraph() {
  const { width } = useWindowSize();
  const { resolvedTheme } = useTheme();
  const { isMounted } = useMounted();

  const isMediumCalendar = isMounted && width && width > 450;
  const isLargeCalendar = isMounted && width && width > 700;

  // useCallback because it has a dependency from useWindowSize which fires on resize
  const transformData = React.useCallback(
    (contributions: Day[]) => {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth();
      const shownMonths = isMediumCalendar ? 8 : 6;

      return contributions.filter((day) => {
        const date = new Date(day.date);
        const monthOfDay = date.getMonth();

        return (
          date.getFullYear() === currentYear &&
          monthOfDay > currentMonth - shownMonths &&
          monthOfDay <= currentMonth
        );
      });
    },
    [isMediumCalendar]
  );

  // useMemo because useWindowWidth renders on window resize listener
  const resizeCalendar = React.useMemo(
    () => (isLargeCalendar ? undefined : transformData),
    [isLargeCalendar, transformData]
  );

  const emptyColor = resolvedTheme === "light" ? "#ebedf0" : "#333333";

  const theme = {
    level0: emptyColor,
    level1: "#9be9a8",
    level2: "#40c463",
    level3: "#30a14e",
    level4: "#216e39",
  };

  return (
    <Suspense fallback={null}>
      <GitHubCalendar
        hideTotalCount={!isLargeCalendar}
        username="TonyDotDev"
        transformData={resizeCalendar}
        theme={theme}
      >
        <ReactTooltip html />
      </GitHubCalendar>
    </Suspense>
  );
}
