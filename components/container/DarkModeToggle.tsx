import { useTheme } from "next-themes";
import { useSpring, animated } from "react-spring";

import useMounted from "hooks/useMounted";

export default function DarkModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { isMounted } = useMounted();

  const properties = {
    sun: {
      r: 9,
      transform: "rotate(40deg)",
      cx: 12,
      cy: 4,
      opacity: 0,
    },
    moon: {
      r: 5,
      transform: "rotate(90deg)",
      cx: 30,
      cy: 0,
      opacity: 1,
    },
    springConfig: { mass: 4, tension: 250, friction: 35 },
  };

  const { r, transform, cx, cy, opacity } = properties[resolvedTheme === "dark" ? "moon" : "sun"];

  const svgContainerProps = useSpring({ transform, config: properties.springConfig });
  const { r: rValue } = useSpring({ r, config: properties.springConfig });
  const { cy: cyValue, cx: cxValue } = useSpring({ cx, cy, config: properties.springConfig });
  const linesProps = useSpring({ opacity, config: properties.springConfig });

  return (
    <button
      aria-label='Toggle Dark Mode'
      type='button'
      className='w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all'
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {isMounted && (
        <animated.svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          style={{ cursor: "pointer", ...svgContainerProps }}
        >
          <mask id='mask'>
            <rect x='0' y='0' width='100%' height='100%' fill='white' />
            {/* as any casting is a workaround for react-spring bug */}
            {/* https://github.com/pmndrs/react-spring/issues/1102 */}
            <animated.circle cx={cxValue as any} cy={cyValue as any} r='9' fill='black' />
          </mask>

          {/* as any casting is a workaround for react-spring bug */}
          {/* https://github.com/pmndrs/react-spring/issues/1102 */}
          <animated.circle
            fill='currentColor'
            cx='12'
            cy='12'
            r={rValue as any}
            mask='url(#mask)'
          />
          <animated.g style={linesProps} stroke='currentColor'>
            <line x1='12' y1='1' x2='12' y2='3' />
            <line x1='12' y1='21' x2='12' y2='23' />
            <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
            <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
            <line x1='1' y1='12' x2='3' y2='12' />
            <line x1='21' y1='12' x2='23' y2='12' />
            <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
            <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
          </animated.g>
        </animated.svg>
      )}
    </button>
  );
}
