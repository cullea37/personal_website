/** @jsxImportSource theme-ui */
import NextLink from 'next/link';
import NavButton from '@components/Navbar/NavButton';
import NavIconButton from '@components/Navbar/NavIconButton';
import Burger from '@components/Navbar/Burger';
import Logo from '@components/svgs/Logo';
import Mode from '@components/svgs/Mode';
import { Box, Button } from 'theme-ui';
import useBreakpointIndex from '@hooks/useBreakpointIndex';

function Navbar() {
  const breakpointIndex = useBreakpointIndex();

  return (
    <Box
      as="nav"
      sx={{
        bg: 'background',
        position: 'fixed',
        top: '0',
        width: '100%',
        height: '60px',
        zIndex: 100,
      }}
    >
      <ul
        sx={{
          bg: 'background',
          display: 'flex',
          justifyContent: 'space-between',
          listStyleType: 'none',
          marginTop: 'none',
          marginBlockStart: '0px',
          marginBlockEnd: '0px',
          padding: '0px',
          height: '60px',
        }}
      >
        <li>
          <NextLink href="/">
            <Button
              variant="nav"
              sx={{
                bg: 'background',
                padding: '0px',
              }}
            >
              <Logo
                LogoType="TransparentLong"
                height={breakpointIndex === 0 ? '48px' : '60px'}
                bodyColor="primary"
                hoverColor="secondary"
              />
            </Button>
          </NextLink>
        </li>
        <div sx={{ display: 'flex' }}>
          {breakpointIndex > 0 && (
            <>
              <NavIconButton
                NavIconType="Linkedin"
                href="http://www.linkedin.com/in/andrew-cullen-software-developer"
              />
              <NavIconButton
                NavIconType="Github"
                href="https://github.com/cullea37"
              />
              <Mode />
            </>
          )}
          {breakpointIndex > 2 ? (
            <>
              <NavButton href="/" label="Home" />
              <NavButton href="/blog" label="Blog" />
              <NavButton href="/portfolio" label="Portfolio" />
            </>
          ) : (
            <Burger />
          )}
        </div>
      </ul>
    </Box>
  );
}

export default Navbar;
