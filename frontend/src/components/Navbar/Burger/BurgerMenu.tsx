import { Box } from 'theme-ui';
import { useSelector } from 'react-redux';
import { RootState } from '@src/redux/store';
import NavButton from '@components/Navbar/NavButton';
import NavIconButton from '@components/Navbar/NavIconButton';
import Mode from '@src/components/svgs/Mode';
import useBreakpointIndex from '@hooks/useBreakpointIndex';

function BurgerMenu() {
  const isOpen = useSelector((state: RootState) => state.burger.toggled);
  const breakpointIndex = useBreakpointIndex();

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 60,
        left: 0,
        width: '100vw',
        height: 'calc(100vh - 60px)',
        background: 'background',
        transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        zIndex: -1,
      }}
    >
      <NavButton href="/" label="Home" variant="burger" />
      <NavButton href="/blog" label="Blog" variant="burger" />
      <NavButton href="/portfolio" label="Portfolio" variant="burger" />
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
