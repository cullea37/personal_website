import { useEffect } from 'react';
import { Box } from 'theme-ui';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@src/redux/store';
import { toggleBurgerMenu } from '@src/redux/burgerSlice';
import NavButton from '@components/Navbar/NavButton';
import NavIconButton from '@components/Navbar/NavIconButton';
import Mode from '@src/components/svgs/Mode';
import useBreakpointIndex from '@hooks/useBreakpointIndex';

function BurgerMenu() {
  const isOpen = useSelector((state: RootState) => state.burger.toggled);
  const breakpointIndex = useBreakpointIndex();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const closeMenuOnClick = () => {
    dispatch(toggleBurgerMenu());
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 60,
        left: 0,
        width: '100vw',
        height: 'calc(100dvh - 60px); calc(100vh - 60px)',
        background: 'background',
        transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.5s ease-in-out',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        zIndex: -1,
      }}
    >
      <NavButton
        href="/"
        label="Home"
        variant="burger"
        closeMenuOnClick={closeMenuOnClick}
      />
      <NavButton
        href="/blog"
        label="Blog"
        variant="burger"
        closeMenuOnClick={closeMenuOnClick}
      />
      <NavButton
        href="/portfolio"
        label="Portfolio"
        variant="burger"
        closeMenuOnClick={closeMenuOnClick}
      />
      {breakpointIndex === 0 && (
        <div style={{ display: 'flex' }}>
          <NavIconButton
            NavIconType="Linkedin"
            href="http://www.linkedin.com/in/andrew-cullen-software-developer"
          />
          <NavIconButton
            NavIconType="Github"
            href="https://github.com/cullea37"
          />
          <Mode />
        </div>
      )}
    </Box>
  );
}

export default BurgerMenu;
