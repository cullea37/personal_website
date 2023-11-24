import { useEffect, useState } from 'react';
import { useThemeUI } from 'theme-ui';

function useBreakpointIndex() {
  const { theme } = useThemeUI();
  const [breakpointIndex, setBreakpointIndex] = useState(0);

  useEffect(() => {
    const updateBreakpointIndex = () => {
      const windowWidth = window.innerWidth;
      let index = theme.breakpoints.findIndex(
        (breakpoint) => windowWidth < parseInt(breakpoint, 10),
      );
      if (index === -1) {
        index = theme.breakpoints.length;
      }
      setBreakpointIndex(index);
    };

    updateBreakpointIndex();
    window.addEventListener('resize', updateBreakpointIndex);

    return () => {
      window.removeEventListener('resize', updateBreakpointIndex);
    };
  }, [theme]);

  return breakpointIndex;
}

export default useBreakpointIndex;
