/** @jsxImportSource theme-ui */
import NextLink from 'next/link';
import NavButton from '@components/Navbar/NavButton';
import NavIconButton from '@components/Navbar/NavIconButton';
import Logo from '@components/svgs/Logo';
import Mode from '@components/svgs/Mode';
import { Box, Button } from 'theme-ui';

function Navbar() {
  return (
    <Box
      as="nav"
      sx={{
        bg: 'background',
        position: 'fixed',
        top: '0',
        width: '100%',
        height: '60px',
      }}
    >
      <ul
        sx={{
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
                height="60px"
                bodyColor="primary"
                hoverColor="secondary"
              />
            </Button>
          </NextLink>
        </li>
        <div sx={{ display: 'flex' }}>
          <NavIconButton
            NavIconType="Linkedin"
            href="http://www.linkedin.com/in/andrew-cullen-software-developer"
          />
          <NavIconButton
            NavIconType="Github"
            href="https://github.com/cullea37"
          />
          <Mode ModeType="Dark" />
          <NavButton href="/" label="Home" />
          <NavButton href="/blog" label="Blog" />
          <NavButton href="/portfolio" label="Portfolio" />
        </div>
      </ul>
    </Box>
  );
}

export default Navbar;
