import React from "react";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";

import useWindowSize from "hooks/useWindowSize";

interface Day {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export default function ContributionGraph() {
  const { width } = useWindowSize();
  const { resolvedTheme } = useTheme();

  const isMediumCalendar = width && width > 450;
  const isLargeCalendar = width && width > 700;

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
    <GitHubCalendar
      hideTotalCount={!isLargeCalendar}
      username='TonyDotDev'
      transformData={resizeCalendar}
      theme={theme}
    />
  );
}
