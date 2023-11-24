/** @jsxImportSource theme-ui */
import { useState, useEffect } from 'react';
import { Button, useThemeUI, useColorMode } from 'theme-ui';
import dynamic from 'next/dynamic';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@src/redux/store';
import { setLightMode, setDarkMode } from '@src/redux/themeSlice';

const Light = dynamic(() => import('@src/components/svgs/Mode/Light'));
const Dark = dynamic(() => import('@src/components/svgs/Mode/Dark'));

interface ModeProps {
  bodyColor?: string;
  hoverColor?: string;
}

Mode.defaultProps = {
  bodyColor: 'primary',
  hoverColor: 'secondary',
};

const modeComponents = {
  Light,
  Dark,
};

function Mode({ bodyColor, hoverColor }: ModeProps): JSX.Element {
  const context = useThemeUI();
  const [, setColorMode] = useColorMode();
  const themeMode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  const finalBodyColor = context.theme.colors[bodyColor] as string;
  const finalHoverColor = context.theme.colors[hoverColor] as string;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setColorMode(localTheme);
      if (localTheme === 'dark') {
        dispatch(setDarkMode());
      } else {
        dispatch(setLightMode());
      }
    }
  }, [dispatch, setColorMode]);

  const handleThemeSwitch = () => {
    if (themeMode === 'light') {
      dispatch(setDarkMode());
      setColorMode('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      dispatch(setLightMode());
      setColorMode('light');
      window.localStorage.setItem('theme', 'light');
    }
  };

  const ModeComponent =
    themeMode === 'light' ? modeComponents.Dark : modeComponents.Light;

  return (
    <Button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleThemeSwitch}
      variant="navIcon"
    >
      <ModeComponent bodyColor={isHovered ? finalHoverColor : finalBodyColor} />
    </Button>
  );
}

export default Mode;
